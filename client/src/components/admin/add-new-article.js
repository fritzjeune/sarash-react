import React , { Component } from "react";


class SearchItem extends Component {

    state = {

    }

    searchItem()

    render() {
        return <div>
            <input type="text" placeholder="search a collection or a dress"/>
            <div id="search-results">
                <div className="result">
                    <div className="result-img-thum">
                        <img src=""/>
                    </div>
                    <div>
                        <p>The retrieve item Title</p>
                        <h4>The retrieve item Lot Number</h4>
                    </div>
                </div>
            </div>
        </div>
    }  
}

class NewItem extends Component {

    
    render() {
        return <div>
        
        </div>
    }
}

export default class DressCollectionMgmt extends Component {
    render() {
        return <div>
            <SearchItem />
            <NewItem />
        </div>
    }
}