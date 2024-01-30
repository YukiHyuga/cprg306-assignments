import Link from "next/link";


const StudentInfo = () => {
    return (
        <div>
            <p>Dave Luna</p>
            <div className="hover:underline hover:text-pink-400"><Link href={"https://github.com/YukiHyuga/cprg306-assignments"}>Link to GitHub Repository</Link></div>
        </div>
    );
};
export default StudentInfo;