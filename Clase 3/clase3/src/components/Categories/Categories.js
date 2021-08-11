import React from 'react';
import CardCategory from '../CardCategory/CardCategory';

export default function Categories() {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        <CardCategory/>
                        <CardCategory/>
                        <CardCategory/>
                        <CardCategory/>
                        <CardCategory/>
                        <CardCategory/>
                    </div>
                </div>
            </div>
        </div>
    )
}