import Image from "next/image"

export default function CategoryCard(props) {
    return(
        <div className="card text-center">
            <div className="card-image">
            <Image src={props.image} className="card-img-top" alt="..." style={{height: "10rem", width: "auto"}}/>
            </div>
            <div className="card-body">
              <div className="card-title">{props.title}</div>
            </div>
        </div>
    )
}