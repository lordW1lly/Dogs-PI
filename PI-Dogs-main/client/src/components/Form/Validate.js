


export function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = 'name is required';
    } else if (!/^[a-zA-Z\s]*$/.test(input.name)) {
        errors.name = 'name is invalid'
    }
    //!----> abajo los de Weight ------

    if (!/^\d+$/.test(input.minWeight) || !/[^0-9]/.test(input.maxWeight)) {
        errors.weight = 'must be a number'

    } else if (!input.minWeight || !input.maxWeight) {
        errors.weight = 'weight fields are empty'
    } else if (input.minWeight >= input.maxWeight) {
        errors.weight = 'Minimum-weight must be lower value than maximum-weight'
    }
    //! --> abajo los de Height--------

        /* if(!/[^0-9]/.test(input.minHeight) || !/[^0-9]/.test(input.maxHeight) ) {
            errors.height = 'must be a number'
    
        } else */ if (!input.minHeight || !input.maxHeight) {
        errors.height = 'eight fields are empty'
    } else if (input.minHeight >= input.maxHeight) {
        errors.height = 'Minimum-height must be lower value than maximum-height'
    }
    //?? ---> para abajo los de lifespan

        /* if(!/[^0-9]/.test(input.minLifeSpan) || !/[^0-9]/.test(input.maxLifeSpan) ) {
            errors.lifeSpan = 'must be a number'
    
        } else */ if (!input.minLifeSpan || !input.maxLifeSpan) {
        errors.lifeSpan = 'Life span fields are empty'
    } else if (input.minLifeSpan >= input.maxLifeSpan) {
        errors.lifeSpan = 'Minimum-life span life must be lower value than maximum value'
    }
    //!! abajo el de temp


    return errors;
}

export function validateTemp(temperament) {
    let tempError = {};
    if (temperament.length === 0) {
        tempError.temperament = 'Pick at least 3(three) words'
    }
}
