import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {

    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                const imgURL = imgResponse.data.display_url;
                const { name, price, category, recipe } = data;
                const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
                console.log(newItem);
                axiosSecure.post('/menu', newItem)
                    .then(data => {
                        console.log('After Posting New Item', data.data);
                        if (data.data.insertedId) {
                            reset();
                            Swal.fire({
                                position: 'center-center',
                                icon: 'success',
                                title: 'Item Added',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
            })
    };
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    return (
        <>
            <SectionTitle subHeading="What's new?" heading="ADD AN ITEM"></SectionTitle>

            <div className="bg-gray-200 p-10 shadow-sm rounded">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-[739px]">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Recipe name*</span>
                        </label>
                        <input type="text" placeholder="Recipe name"
                            {...register("name", { required: true, maxLength: 120 })}
                            className="input focus:outline-none shadow-sm w-full" />
                    </div>
                    <div className="flex gap-2 pt-0">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Category*</span>
                            </label>
                            <select defaultValue="Category" {...register("category", { required: true })} className="select focus:outline-none shadow-sm">
                                <option disabled selected>Category</option>
                                <option>Pizza</option>
                                <option>Soup</option>
                                <option>Salad</option>
                                <option value='dessert'>Dessert</option>
                                <option>Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Price*</span>
                            </label>
                            <input type="text" placeholder="Price"
                                {...register("price", { required: true })}
                                className="input focus:outline-none shadow-sm w-full" />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <textarea placeholder="Recipe"
                            {...register("recipe", { required: true })}
                            className="textarea focus:outline-none shadow-sm textarea-lg w-full" ></textarea>
                    </div>
                    <div>
                        <input type="file" {...register("image", { required: true })} className="file-input focus:outline-none shadow-sm w-full" />
                    </div>
                    <button className="btn bg-[#835D23] border-0 flex">Add Item &nbsp; <FaUtensils></FaUtensils></button>
                </form>
            </div>
        </>
    );
};

export default AddItem;