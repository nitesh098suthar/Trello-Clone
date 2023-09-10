import React, { useEffect, useState } from "react";
import { addAction, getAllTaskAction } from "../../store/action/taskAction";
import { useDispatch, useSelector } from "react-redux";
import SingleTask from "./SingleTask";

function Task() {
  const [dosTask, setDosTask] = useState({
    title: "",
    description: "",
  });
  const [doingTask, setDoingTask] = useState({
    title: "",
    description: "",
  });
  const [doneTask, setDoneTask] = useState({
    title: "",
    description: "",
  });
  const [done, setDone] = useState([]);
  const [doing, setDoing] = useState([]);
  const [doTask, setDoTask] = useState([]);

  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.taskReducer);

  useEffect(() => {
    dispatch(getAllTaskAction());
  }, []);

  const inputHandler = (e, type) => {
    if (type === "do") {
      setDosTask({ ...dosTask, [e.target.name]: e.target.value });
    }
    if (type === "doing") {
      setDoingTask({ ...doingTask, [e.target.name]: e.target.value });
    }
    if (type === "done") {
      setDoneTask({ ...doneTask, [e.target.name]: e.target.value });
    }
  };

  const submitHandler = async (category) => {
    if (category === "do") {
      await dispatch(addAction(dosTask.title, dosTask.description, category));
      setDosTask({
        title: "",
        description: "",
      });
    }
    if (category === "doing") {
      await dispatch(
        addAction(doingTask.title, doingTask.description, category)
      );
      setDoingTask({
        title: "",
        description: "",
      });
    }
    if (category === "done") {
      await dispatch(addAction(doneTask.title, doneTask.description, category));
      setDoneTask({
        title: "",
        description: "",
      });
    }

    dispatch(getAllTaskAction());
  };

  const filteredTask = (category) => {
    return tasks?.filter((e) => {
      return e.category === category;
    });
  };

  useEffect(() => {
    setDoTask(filteredTask("do"));
    setDoing(filteredTask("doing"));
    setDone(filteredTask("done"));
  }, [tasks]);

  return (
    <>
      <div
        id="mainContainer"
        className="p-6 min-h-[400px] flex  bg-yellow-400 w-screen"
        style={{ width: "100%", overflowX: "auto" }}
      >
        <div className="p-6 bg-white rounded-xl shadow-lg h-[100%]">
          <h1 className="font-bold text-2xl my-2 w-[300px]">Do</h1>
          <hr className="" />
          <div>
            <form method="post" className="my-3">
              <div className="py-2">
                <label htmlFor="title" className="font-bold text-lg my-3">
                  Title
                </label>
                <input
                  name="title"
                  type="text"
                  placeholder="Title"
                  id="title"
                  value={dosTask.title}
                  className="bg-slate-100 w-full p-2 rounded-md"
                  onChange={(e) => inputHandler(e, "do")}
                />
              </div>
              <div className="my-3">
                <label
                  htmlFor="description"
                  className="font-bold text-lg my-3 "
                >
                  Description
                </label>
                <input
                  name="description"
                  type="text"
                  placeholder="Description"
                  id="description"
                  value={dosTask.description}
                  className="bg-slate-100 w-full p-2 rounded-md"
                  onChange={(e) => inputHandler(e, "do")}
                />
              </div>
              <input
                type="button"
                id="btn"
                value="ADD"
                onClick={() => submitHandler("do")}
                className="bg-slate-800 text-white p-2 rounded-lg px-8 mt-2"
              />
            </form>
          </div>
          <div>
            {doTask?.length > 0 &&
              doTask?.map((e) => (
                <SingleTask title={e.title} description={e.description} />
              ))}
          </div>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-lg mx-6">
          <h1 className="font-bold text-2xl my-2 w-[300px]">Doing</h1>
          <hr className="" />

          <div>
            <form method="post" className="my-3">
              <div className="py-2">
                <label htmlFor="title" className="font-bold text-lg my-3">
                  Title
                </label>
                <input
                  name="title"
                  type="text"
                  placeholder="Title"
                  id="title"
                  value={doingTask.title}
                  className="bg-slate-100 w-full p-2 rounded-md"
                  onChange={(e) => inputHandler(e, "doing")}
                />
              </div>
              <div className="my-3">
                <label htmlFor="description" className="font-bold text-lg my-3">
                  Description
                </label>
                <input
                  name="description"
                  type="text"
                  placeholder="Description"
                  id="description"
                  value={doingTask.description}
                  className="bg-slate-100 w-full p-2 rounded-md"
                  onChange={(e) => inputHandler(e, "doing")}
                />
              </div>
              <input
                type="button"
                id="btn"
                value="ADD"
                onClick={() => submitHandler("doing")}
                className="bg-slate-800 text-white p-2 rounded-lg px-8 mt-2"
              />
            </form>
          </div>
          <div>
            {doing?.length > 0 &&
              doing?.map((e) => (
                <SingleTask
                  title={e.title}
                  description={e.description}
                  key={e._id}
                />
              ))}
          </div>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-lg">
          <h1 className="font-bold text-2xl my-2 w-[300px]">Done</h1>
          <hr className="" />

          <div>
            <form method="post" className="my-3">
              <div className="py-2">
                <label htmlFor="title" className="font-bold text-lg my-3">
                  Title
                </label>
                <input
                  name="title"
                  type="text"
                  placeholder="Title"
                  id="title"
                  value={doneTask.title}
                  className="bg-slate-100 w-full p-2 rounded-md"
                  onChange={(e) => inputHandler(e, "done")}
                />
              </div>
              <div className="my-3">
                <label
                  htmlFor="description"
                  className="font-bold text-lg my-3 "
                >
                  Description
                </label>
                <input
                  name="description"
                  type="text"
                  placeholder="Description"
                  id="description"
                  value={doneTask.description}
                  className="bg-slate-100 w-full p-2 rounded-md"
                  onChange={(e) => inputHandler(e, "done")}
                />
              </div>

              <input
                type="button"
                id="btn"
                value="ADD"
                onClick={() => submitHandler("done")}
                className="bg-slate-800 text-white p-2 rounded-lg px-8 mt-2"
              />
            </form>
          </div>
          <div>
            {done?.length > 0 &&
              done?.map((e) => (
                <SingleTask title={e.title} description={e.description} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
