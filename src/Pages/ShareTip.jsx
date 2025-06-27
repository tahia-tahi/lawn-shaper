
import { toast } from 'react-toastify';



const ShareTip = () => {
    const handleSubmitTip = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const tipsData = Object.fromEntries(formData.entries())
        console.log(tipsData);

        fetch('https://lawn-shaper-server.vercel.app/tips', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(tipsData)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log(data);
                    toast.success('Successfully added tips')

                }
            })
    };

    return (

        <div>
            <div className="mt-10">
                <div className="text-left space-y-4">
                    <h1 className="text-3xl font-bold text-primary">Share Gardening Tip</h1>
                    <p className='mb-3'>Share your best gardening advice with fellow enthusiasts! Your tips can help others grow greener and better. 🌱</p>
                </div>

                <form onSubmit={handleSubmitTip}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <fieldset className="fieldset bg-primary border-base-300 rounded-box border p-4">
                            <label className="label text-white">Title</label>
                            <input
                                type="text"
                                name="title"
                                className="input w-full"
                                placeholder="e.g., How I Grow Tomatoes Indoors"
                            />
                        </fieldset>

                        <fieldset className="fieldset bg-primary border-base-300 rounded-box border p-4">
                            <label className="label text-white">Plant Type / Topic</label>
                            <input
                                type="text"
                                name="topic"
                                className="input w-full"
                                placeholder="Rose, Tomato, Indoor Gardening"
                            />
                        </fieldset>

                        <fieldset className="fieldset bg-primary border-base-300 rounded-box border p-4">
                            <label className="label text-white">Difficulty Level</label>
                            <select name="difficulty" className="select w-full">
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>
                        </fieldset>

                        <fieldset className="fieldset bg-primary border-base-300 rounded-box border p-4">
                            <label className="label text-white">Category</label>
                            <select name="category" className="select w-full">
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
                            className="input w-full"
                            placeholder="https://example.com/image.jpg"
                        />
                    </fieldset>

                    <fieldset className="fieldset bg-primary border-base-300 rounded-box border my-6 p-4">
                        <label className="label text-white">Availability</label>
                        <select name="availability" className="select w-full">
                            <option>Public</option>
                            <option>Hidden</option>
                        </select>
                    </fieldset>

                    <input
                        type="submit"
                        className="btn bg-primary hover:bg-accent hover:text-white w-full"
                        value="Submit Tip"
                    />
                </form>
            </div>

        </div>



    );
};

export default ShareTip;
