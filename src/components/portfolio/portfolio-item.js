import React from "react";

import { Link } from "react-router-dom";

export default function(props) {
    //Datos que necesitamos:
        // -Imagen de fondo (Background): thumb_image_url
        // -Logo: logo_url
        // -Descripción del elemento del portafolios: description
        // -id (identificación): id
        // "id", "name", "description", "url", "category", "position", "thumb_image_url", "banner_image_url", "logo_url", "column_names_merged_with_images"

        const { id, description, thumb_image_url, logo_url} = props.item;   
    return (
        <div className="portfolio-item-wrapper">
            <img src={thumb_image_url} />
            <img src={logo_url} />
            <div>{description}</div>
            <Link to={`/portfolio/${id}`}>Link</Link>
        </div>
    );
}