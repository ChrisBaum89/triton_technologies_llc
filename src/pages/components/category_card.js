import Image from "next/image"

export default function CategoryCard(props) {
    return(
        <div class="card">
            <div class="card-image">
            <Image src={props.image} class="card-img-top" alt="..." style={{height: "12rem", width: "14rem"}}/>
            </div>
            <div class="card-body">
              <div class="card-title">{props.title}</div>
            </div>
        </div>
    )
}