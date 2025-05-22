import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import Footer from './Footer'

const UpdateTips = () => {


    const { _id,title, category, availability, image, topic, difficulty, description } = useLoaderData()

    const handleUpdateTip = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedTips = Object.fromEntries(formData.entries())
        console.log(updatedTips);
        fetch(`http://localhost:3000/tips/${_id}`,{
            method:'PUT',
            headers:{
            'content-type' : 'application/json'

            },
            body:JSON.stringify(updatedTips)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                toast.success('Tips updated successfully')
            console.log(data);

            }
        })
    }



    return (

        <div>

            <Navbar></Navbar>
                    <div className="p-24">
            <div className="p-12 text-center space-y-4">
                <h1 className="text-6xl">Update Gardening Tip</h1>
                <p>Share your best gardening advice with fellow enthusiasts! Your tips can help others grow greener and better. 🌱</p>
            </div>

            <form onSubmit={handleUpdateTip}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <fieldset className="fieldset bg-primary border-base-300 rounded-box border p-4">
                        <label className="label text-white">Title</label>
                        <input
                            type="text"
                            name="title"
                            defaultValue={title}
                            className="input w-full"
                            placeholder="e.g., How I Grow Tomatoes Indoors"
                        />
                    </fieldset>

                    <fieldset className="fieldset bg-primary border-base-300 rounded-box border p-4">
                        <label className="label text-white">Plant Type / Topic</label>
                        <input
                            type="text"
                            name="topic"
                            defaultValue={topic}
                            className="input w-full"
                            placeholder="Rose, Tomato, Indoor Gardening"
                        />
                    </fieldset>

                    <fieldset className="fieldset bg-primary border-base-300 rounded-box border p-4">
                        <label className="label text-white">Difficulty Level</label>
                        <select name="difficulty" defaultValue={difficulty} className="select w-full">
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset bg-primary border-base-300 rounded-box border p-4">
                        <label className="label text-white">Category</label>
                        <select name="category" defaultValue={category} className="select w-full">
                            <option>Composting</option>
                            <option>Plant Care</option>
                            <option>Vertical Gardening</option>
                            <option>Soil & Fertilizers</option>
                            <option>Indoor Gardening</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset bg-primary border-base-300 rounded-box border p-4">
                        <label className="label text-white">User Email</label>
                        <input
                            type="email"
                            name="email"
                            className="input w-full cursor-not-allowed"
                            value="user@example.com"
                            readOnly
                        />
                    </fieldset>

                    <fieldset className="fieldset bg-primary border-base-300 rounded-box border p-4">
                        <label className="label text-white">User Name</label>
                        <input
                            type="text"
                            name="username"
                            className="input w-full cursor-not-allowed"
                            value="John Doe"
                            readOnly
                        />
                    </fieldset>
                </div>

                <fieldset className="fieldset bg-primary border-base-300 rounded-box border my-6 p-4">
                    <label className="label text-white">Description</label>
                    <textarea
                        name="description"
                        defaultValue={description}
                        className="textarea w-full"
                        rows="4"
                        placeholder="Share your detailed tip here..."
                    ></textarea>
                </fieldset>

                <fieldset className="fieldset bg-primary border-base-300 rounded-box border my-6 p-4">
                    <label className="label text-white">Image URL</label>
                    <input
                        type="url"
                        name="image"
                        defaultValue={image}
                        className="input w-full"
                        placeholder="https://example.com/image.jpg"
                    />
                </fieldset>

                <fieldset className="fieldset bg-primary border-base-300 rounded-box border my-6 p-4">
                    <label className="label text-white">Availability</label>
                    <select name="availability" defaultValue={availability} className="select w-full">
                        <option>Public</option>
                        <option>Hidden</option>
                    </select>
                </fieldset>

                <input
                    type="submit"
                    className="btn bg-primary hover:bg-accent hover:text-white w-full"
                    value="Update Tip"
                />
            </form>
        </div>

        <Footer></Footer>
        </div>


    );
};

export default UpdateTips;