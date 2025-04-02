
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectItem, SelectContent, SelectTrigger } from "@/components/ui/select";

const departments = [
  { name: "ماركتنق", color: "bg-red-200" },
  { name: "كواليتي", color: "bg-yellow-200" },
  { name: "الشراكات", color: "bg-green-200" },
  { name: "سويتر", color: "bg-blue-200" },
  { name: "اوبريشن", color: "bg-purple-200" },
  { name: "سوشال ميديا", color: "bg-pink-200" },
  { name: "خدمة عملاء", color: "bg-orange-200" },
  { name: "تقنية", color: "bg-cyan-200" },
  { name: "كرييتف", color: "bg-lime-200" },
];

const statusList = [
  { value: "غير منجز", color: "text-red-600" },
  { value: "منجز", color: "text-green-600" },
  { value: "جاري العمل", color: "text-blue-600" },
  { value: "انتظار المحتوى", color: "text-yellow-600" },
  { value: "انتظار الرد", color: "text-purple-600" },
  { value: "معلق", color: "text-gray-600" },
  { value: "ملغي", color: "text-pink-600" },
  { value: "اهمية", color: "text-orange-600" },
];

const displayValue = (value) => value?.trim() ? value : "--";

const getDepartmentColor = (deptName) => {
  const dept = departments.find(d => d.name === deptName);
  return dept ? dept.color : "bg-gray-200";
};

const getStatusColor = (status) => {
  const stat = statusList.find(s => s.value === status);
  return stat ? stat.color : "text-black";
};

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [filterDept, setFilterDept] = useState("all");
  const [editTaskId, setEditTaskId] = useState(null);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    department: "",
    requester: "",
    type: "",
    size: "",
    link: "",
    deadline: "",
    status: "غير منجز",
    date: new Date().toISOString().split("T")[0],
  });

  const addTask = () => {
    if (!newTask.title.trim()) return;
    if (editTaskId) {
      setTasks(prev => prev.map(t => t.id === editTaskId ? { ...newTask, id: editTaskId } : t));
      setEditTaskId(null);
    } else {
      setTasks(prev => [...prev, { ...newTask, id: Date.now() }]);
    }
    resetForm();
  };

  const resetForm = () => {
    setNewTask({
      title: "",
      description: "",
      department: "",
      requester: "",
      type: "",
      size: "",
      link: "",
      deadline: "",
      status: "غير منجز",
      date: new Date().toISOString().split("T")[0],
    });
  };

  const editTask = (task) => {
    setNewTask({ ...task });
    setEditTaskId(task.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const deleteTask = (id) => {
    const confirmed = window.confirm("هل أنت متأكد أنك تريد حذف هذا الطلب؟");
    if (!confirmed) return;
    setTasks(prev => prev.filter(task => task.id !== id));
    if (selectedTask?.id === id) setSelectedTask(null);
  };

  const updateTaskStatus = (id, status) => {
    setTasks(prev => prev.map(task => task.id === id ? { ...task, status } : task));
  };

  const filteredTasks = filterDept === "all" ? tasks : tasks.filter(task => task.department === filterDept);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* إضافة طلب جديد */}
      {/* ... باقي الكود بدون تغيير */}
    </div>
  );
};

export default TaskManager;
