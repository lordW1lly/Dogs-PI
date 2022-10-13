
import { validate } from "./Validate"

export function FormBTS() {



    return (
        <div class='container'>
        <div class="input-group mb-2" id='imageUrl'>
                <span class="input-group-text">Image URL</span>
                <input type="text" aria-label="First name" class="form-control" />
                
            </div>
            <div class="input-group mb-2" id='name'>
                <span class="input-group-text">Name</span>
                <input type="text" aria-label="First name" class="form-control" />

            </div>

            <div class="input-group mb-2" id='weight'>
                <span class="input-group-text">Min and Max Weight</span>
                <input type="text" aria-label="First name" class="form-control" />
                <input type="text" aria-label="Last name" class="form-control" />
            </div>
            <div class="input-group mb-2">
                <span class="input-group-text">Min and Max Height</span>
                <input type="text" aria-label="First name" class="form-control" />
                <input type="text" aria-label="Last name" class="form-control" />
            </div>
            

        </div>
    )
}