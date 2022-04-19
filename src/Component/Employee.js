import '../Component/Employee.css';

const Emp = (props) => {
  return (
    <div className="card">
      <img src={props.img} className="img" />
      <h3 className='id'> Id : {props.eid}</h3>
      <h3> Name : {props.ename}</h3>
      <h3> City : {props.ecity}</h3>
      <h3> Age : {props.eage}</h3>
    </div>
  );
}

const Employee = () => {
  return (
    <>
      <h2 className='wel'><i>Welcome to my Card</i></h2>
      <Emp img='./Image2/clock.jpeg' eid="01" ename="Jack" ecity="Noida" eage="25" />
      <Emp img='./Image2/code.jpg' eid="02" ename="Peter" ecity="Kanpur" eage="22" />
      <Emp img='./Image2/dark.jpeg' eid="03" ename="Max" ecity="Allahabad" eage="20" />
      <Emp img='./Image2/dark2.jpeg' eid="04" ename="Sam" ecity="Lucknow" eage="26" />
      <Emp img='./Image2/hand.jpg' eid="05" ename="Pankaj Maurya" ecity="Noida" eage="25" />
      <Emp img='./Image2/lap.webp' eid="06" ename="Deepak Maurya" ecity="Kanpur" eage="22" />
      <Emp img='./Image2/ngo.jpg' eid="07" ename="Abhishek " ecity="Allahabad" eage="20" />
      <Emp img='./Image2/web.jpg' eid="08" ename="Dara Patel" ecity="Lucknow" eage="26" />
      <Emp img='./Image2/web2.png' eid="09" ename="Vipin" ecity="Noida" eage="25" />
      <Emp img='./Image2/web3.png' eid="10" ename="Ashish yadav" ecity="Kanpur" eage="22" />
      <Emp img='./Image2/web4.jpg' eid="11" ename="Abhi" ecity="Allahabad" eage="20" />
      <Emp img='./Image2/web5.jpg' eid="12" ename="Anurag" ecity="Lucknow" eage="26" />

    </>
  );
}

export default Employee;