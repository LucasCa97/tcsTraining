import { useState } from "react"


const useForm = (initialValues = {}) => {
 const [values, setValues] = useState(initialValues)

 const onChange = ({target:{name, value}}) => {
    setValues((v) => ({
        ...v, 
        [name]: value,

    }))
 }
 return {onChange, values}
}


export default useForm
