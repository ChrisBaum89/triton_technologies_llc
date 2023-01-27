import Image from "next/image"

export default function CategoryCard(props) {
    return(
        <div class="card" style={{width: "25rem"}}>
          <Image src={props.image} class="card-img-top" alt="..." style={{height: "18rem", width: "25rem"}}/>
            <div class="card-body">
              <div class="card-title">{props.title}</div>
            </div>
        </div>
    )
}