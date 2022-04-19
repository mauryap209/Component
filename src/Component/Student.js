import '../Component/Student.css';

const Data = [
    {
        id: 1,
         name: "Pankaj Maurya",
         
    },
    {
        id: 2,
         name: "Abhi",
    },
    {
        id: 3,
         name: "Dara"
    },
    {
        id: 3,
         name: "Dara"
    },
]

const Student = () => {
    return (
        <div className="card">
            {
                Data.map((student) => (
                    <div>
                        <h3>Id:{student.id}</h3> 
                        <h3>Name:{student.name}</h3>
                         
                    </div>
                ))
            }
        </div>
    );
}
export default Student;