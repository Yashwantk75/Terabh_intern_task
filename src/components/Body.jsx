import { FaCircleArrowUp } from "react-icons/fa6";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from 'Axios'
import { useContext, useEffect, useRef } from "react";
import { user_data } from "../store/User-credential";
const Body = () => {



  const navigate = useNavigate();
  const { tasks, userDetail, add_task } = useContext(user_data);
  const task = useRef();
  useEffect(() => { onload() }, [])
  async function onload() {
    const body = {
      token: userDetail.token
    }
    try {
      const request = await axios.post("http://127.0.0.1:8000/get_task", body);
      console.log(request);
      add_task(request.data);
    } catch (error) {
      console.log(error);
    }
  }


  async function signout() {
    try {
      const request = await axios.post("http://127.0.0.1:8000/signout", {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(request);
    } catch (error) {
      console.log(error);
    }
    console.log("signout");
    navigate("/login");
  }



  async function createTask() {
    console.log(userDetail.token);
    const body = {
      token: userDetail.token,
      task: task.current.value
    }
    try {
      const request = await axios.post("http://127.0.0.1:8000/create_task", body);
      await add_task(request.data);
      console.log(request);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteTask(taskId) {
    const body = {
      token: userDetail.token,
      id: taskId
    }
    console.log(body);
    try {
      const request = await axios.delete('http://127.0.0.1:8000/delete_task', body)
      console.log(request);
    } catch (error) {
      console.log(error);
    }
  }

  function doneTask(id) {
    const elements = document.querySelectorAll('.task-content');
    elements.forEach((item) => {
      console.log(item.value, id);
      if (item.getAttribute('value') === id.toString()) {
        item.style.textDecoration = "line-through";
      }
    });
  }



  return (
    <>
      <div className="body-content">
        <div className="body-top">
          <IoArrowBackOutline className="back-arrow" onClick={signout} />

          <div className="title">
            <span className="double-border">Task</span>
          </div>
        </div>
        <div className="content">
          <div className="tasks">
            {tasks.map((item, ind) => {
              return <div key={item.id} className="task" >
                <div key={item.id} value={item.id} className="task-content">Task{ind + 1}:{item.task}</div>
                <div className="check-button" onClick={() => doneTask(item.id)}>
                  <FaCheck />
                </div>
                <div className="delete-button" onClick={() => deleteTask(item.id)}>
                  <MdDelete />
                </div>
              </div >
            })}
          </div>



          <form>
            <input type="text" className="input" ref={task} />
            <div className="send-button" onClick={createTask}>
              <FaCircleArrowUp />
            </div>
          </form>
        </div>
      </div >
    </>
  );
};
export default Body;
