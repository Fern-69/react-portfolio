import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class PortfolioItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            portfolioItemClass: ""
        };
    }

    handleMouseEnter() {
        this.setState({ portfolioItemClass: "image-blur" });
    }

    handleMouseLeave() {
        this.setState({ portfolioItemClass: "" });
    }
    //Datos que necesitamos:
        // -Imagen de fondo (Background): thumb_image_url
        // -Logo: logo_url
        // -Descripción del elemento del portafolios: description
        // -id (identificación): id
        // "id", "name", "description", "url", "category", "position", "thumb_image_url", "banner_image_url", "logo_url", "column_names_merged_with_images"
    render() {
        const { id, description, thumb_image_url, logo_url } = this.props.item;   
        return (
            <div 
            className="portfolio-item-wrapper"
            onMouseEnter={() => this.handleMouseEnter()}
            onMouseLeave={() => this.handleMouseLeave()}
            >
                <div 
                    className={
                        "portfolio-img-background " + this.state.portfolioItemClass
                    }
                    style={{
                        backgroundImage: "url(" + thumb_image_url + ")"
                    }}
                />    
           
                <div className="img-text-wrapper">
                    <div className="logo-wrapper">
                        <img src={logo_url} />
                    </div>

                    <div className="subtitle">¨{description}</div>
                </div>
            </div>
        );
    }
}