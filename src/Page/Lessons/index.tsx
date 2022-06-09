import React, { useCallback, useEffect, useState } from "react";
import Card from "@/Components/Cards/Card";
import axios from "axios";
import { Lesson } from "@/Core/Models/Lesson.type";
interface Props {}

const Lessons: React.FC<Props> = (props) => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [daysReminning, setDaysReminning] = useState<number>(120);
  const countingTime = useCallback(() => {
    setTimeout(() => {
      setDaysReminning((current) => current - 1);
    }, 24 * 60 * 60 * 1000);
  }, []);
  countingTime();
  useEffect(() => {
    const getAllLessons = async () => {
      try {
        const res = await axios({
          url: "http://localhost:4000/api/v1/lessons",
          method: "GET",
        });
        setLessons(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllLessons();
  }, []);

  return (
    <div className="container mt-5 h-full">
      <div className="flex justify-end mb-6">
        <div>
          <p>
            Days remainding: <strong>{daysReminning} days</strong>
          </p>
          <p>
            Số ngày sử dụng còn lại: <strong>{daysReminning} ngày</strong>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-y-9 h-full">
        {lessons.map((item: Lesson, index: number) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Lessons;
