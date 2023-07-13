'use client'

import CardItem from "@/components/CardItem";
import Modal from "@/components/Modal";
import Pagination from "rc-pagination";
import { useContext, useEffect, useState } from "react";
import AnimeDetail from "../AnimeDetail";
import { getAnimeList } from "@/api/anime";
import InputField from "@/components/Input";
import { LoadingContext } from "@/context/Loading";
import { AlertContext } from "@/context/Alert";

const AnimeList = () => {
    const {setIsLoading} = useContext(LoadingContext);
    const {setAlert} = useContext(AlertContext);
    const [modalId, setModalId] = useState(0);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [search, setSearch] = useState("");
    const [filterData, setFilterData] = useState({
        q: "",
        page: 1,
        limit: 15,
    });
    const [totalData, setTotalData] = useState(0);
    const [dataList, setDataList] = useState([]);

    const fetchAnimeList = async (filter: AnimeListFilterProps) => {
        setIsLoading(true);
        try {
            const response = await getAnimeList(filter);
            if (response.status === 200) {
                const resData = response.data;
                setDataList(resData.data);
                setTotalData(resData.pagination.items.total);
                setFilterData(filter);
                setIsLoading(false);
            }
        } catch (error: any) {
            setAlert({
                isOpen: true,
                message: error.response.data.message
            });
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchAnimeList(filterData);
    }, []);

    const handleChangeTable = (page: number) => {
        let newFilterObj: any = Object.assign({}, filterData);
        newFilterObj["page"] = page;

        fetchAnimeList(newFilterObj);
    };

    const onChangeInput = (value: string) => {
        setSearch(value);
    };

    const onKeyUp = (keyCode: number) => {
        if (keyCode === 13) {
            let newFilterObj: any = Object.assign({}, filterData);
            newFilterObj["q"] = search;

            fetchAnimeList(newFilterObj);
        }
    }

    const onToggleModal = (id?: number) => {
        if (id) setModalId(id);
        setIsOpenModal(!isOpenModal)
    };

    return (
        <div className="anime container-xxl">
            <div className="anime__search">
                <InputField value={search} placeholder="Search anime here..." onChange={onChangeInput} onKeyUp={onKeyUp}/>
            </div>
            <div className="row gy-4">
                {
                    dataList.length > 0 ? (
                        <>
                            {
                                dataList.map((item, index) => (
                                    <div className="col-md-6 col-lg-6 col-xl-4" key={index}>
                                        <CardItem data={item} onOpenDetail={onToggleModal} />
                                    </div>
                                ))
                            }
                        </>
                    ) : (
                        <div className="text-center">
                            Data Not Found!
                        </div>
                    )
                }
            </div>
            {
                totalData ? (
                    <div className="pagination">
                        <Pagination
                            current={Number(filterData.page)}
                            pageSize={Number(filterData.limit)}
                            showSizeChanger={true}
                            total={totalData}
                            onChange={(pageEvent) => handleChangeTable(pageEvent)}
                        />
                    </div>
                ) : <>&nbsp;</>
            }
            <Modal isOpen={isOpenModal} onCloseModal={onToggleModal} hasContainer>
                <AnimeDetail
                    modalId={modalId}
                    dataDetail={dataList.filter((item: AnimeData) => item.mal_id === modalId)[0]}
                />
            </Modal>
        </div>
    )
}

export default AnimeList;
