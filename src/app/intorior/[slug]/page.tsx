import { FC } from 'react';
type ParamsType = {

    params :{
        slug:string
    }
}

const page:FC<ParamsType> = ({params}) =>{
    return (
        <div >
            {params.slug}

        </div>
    )
}

export default page;