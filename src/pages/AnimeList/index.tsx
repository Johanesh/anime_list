'use client'

import CardItem from "@/components/CardItem";
import Modal from "@/components/Modal";
import Pagination from "rc-pagination";
import { useEffect, useState } from "react";
import AnimeDetail from "../AnimeDetail";
import { getAnimeList } from "@/api/anime";

export default function AnimeList() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [filterData, setFilterData] = useState({
        q: "",
        page: 1,
        limit: 9,
    });
    const [totalData, setTotalData] = useState(0);
    const [dataList, setDataList] = useState([]);

    const fetchAnimeList = async (filter: AnimeListFilterProps) => {
        try {
            const response = await getAnimeList(filter);
            if (response.status === 200) {
                const resData = response.data;
                setDataList(resData.data);
                setTotalData(resData.pagination.items.total);
                setFilterData(filter);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchAnimeList(filterData);
    }, []);

    const onToggleModal = (id?: number) => {
        setIsOpenModal(!isOpenModal)
    }

    return (
        <div className="anime container-xxl">
            <div className="row gy-4">
                {
                    dataList.length > 0 && dataList.map((item, index) => (
                        <div className="col-lg-4" key={index}>
                            <CardItem data={item} onOpenDetail={onToggleModal} />
                        </div>
                    ))
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
                            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                        />
                    </div>
                ) : <>&nbsp;</>
            }
            <Modal isOpen={isOpenModal} onCloseModal={onToggleModal}>
                <AnimeDetail/>
            </Modal>
        </div>
    )
}
