import { useState, useEffect } from "react";
import axios from "axios";

export default function Issues() {
    const [issues, setIssues] = useState([]); // Default empty array
    const [form, setForm] = useState({ title: "", description: "" });
    const token = localStorage.getItem("token");

    const fetchIssues = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/issues", {
                headers: { Authorization: `Bearer ${token}` },
            });

            console.log("Backend response:", res.data);

            // Ensure data is always an array
            if (Array.isArray(res.data)) {
                setIssues(res.data);
            } else if (Array.isArray(res.data.issues)) {
                setIssues(res.data.issues);
            } else {
                setIssues([]);
            }
        } catch (err) {
            console.error("Error fetching issues:", err);
            setIssues([]);
        }
    };

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/issues", form, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setForm({ title: "", description: "" }); // Reset form after submit
            fetchIssues();
        } catch (err) {
            console.error("Error creating issue:", err);
        }
    };

    useEffect(() => {
        fetchIssues();
    }, []);

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Issues</h2>

            <form onSubmit={handleSubmit} className="space-y-3 mb-6">
                <input
                    name="title"
                    value={form.title}
                    placeholder="Title"
                    onChange={handleChange}
                    className="border p-2 w-full"
                />
                <input
                    name="description"
                    value={form.description}
                    placeholder="Description"
                    onChange={handleChange}
                    className="border p-2 w-full"
                />
                <button type="submit" className="bg-purple-500 text-white px-4 py-2">
                    Add Issue
                </button>
            </form>

            {issues.length > 0 ? (
                <ul className="space-y-2">
                    {issues.map((issue) => (
                        <li key={issue._id} className="border p-3 rounded">
                            <h3 className="font-bold">{issue.title}</h3>
                            <p>{issue.description}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No issues found.</p>
            )}
        </div>
    );
}
