import Image from "next/image"
import Link from "next/link"

export default function CategoryCard(props) {
    return (
        <div className="card text-center">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#categoryModal"}>
            <div className="card-image">
                <Image src={props.image} className="card-img-top" alt="..." style={{ height: "12rem", width: "auto" }} />
            </div>
            <div className="card-body">
                <div className="card-title">{props.title}</div>
            </div>
            </button>
            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#categoryModal"}>
                Launch demo modal
            </button> */}

            <div class="modal fade" id="categoryModal" tabindex="-1" aria-labelledby="categoryModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="categoryModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}