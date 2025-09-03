import { useState } from "react";
import axios from "axios";

export default function Register() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/register", form);
            localStorage.setItem("token", res.data.token);
            alert("Registered successfully!");
        } catch (err) {
            alert(err.response.data.message || "Error");
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input name="name" placeholder="Name" onChange={handleChange} className="border p-2 w-full" />
                <input name="email" placeholder="Email" onChange={handleChange} className="border p-2 w-full" />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2 w-full" />
                <button className="bg-blue-500 text-white px-4 py-2">Register</button>
            </form>
        </div>
    );
}
