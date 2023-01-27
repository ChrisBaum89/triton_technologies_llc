import Image from "next/image"

export default function CategoryCard(props) {
    return(
        <div className="card">
            <div className="card-image">
            <Image src={props.image} className="card-img-top" alt="..." style={{height: "12rem", width: "14rem"}}/>
            </div>
            <div className="card-body">
              <div className="card-title">{props.title}</div>
            </div>
        </div>
    )
}