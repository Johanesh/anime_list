'use client'
import CardItem from "@/components/CardItem";
import Modal from "@/components/Modal";
import Pagination from "rc-pagination";
import { useState } from "react";

export default function AnimeList() {
    const [filterData, setFilterData] = useState({
        current: "0",
        pageSize: "9",
        totalData: 0,
    });

    return (
        <div className="anime container-xxl">
            <div className="row gy-4">
                <div className="col-lg-4">
                    <CardItem/>
                </div>
                <div className="col-lg-4">
                    <CardItem/>
                </div>
                <div className="col-lg-4">
                    <CardItem/>
                </div>
                <div className="col-lg-4">
                    <CardItem/>
                </div>
                <div className="col-lg-4">
                    <CardItem/>
                </div>
                <div className="col-lg-4">
                    <CardItem/>
                </div>
                <div className="col-lg-4">
                    <CardItem/>
                </div>
                <div className="col-lg-4">
                    <CardItem/>
                </div>
                <div className="col-lg-4">
                    <CardItem/>
                </div>
            </div>
            {
                filterData.totalData ? (
                    <div className="pagination">
                        <Pagination
                            current={Number(filterData.current + 1)}
                            pageSize={Number(filterData.pageSize)}
                            showSizeChanger={true}
                            total={filterData.totalData}
                            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                        />
                    </div>
                ) : <>&nbsp;</>
            }
            <Modal isOpen />
        </div>
    )
}
