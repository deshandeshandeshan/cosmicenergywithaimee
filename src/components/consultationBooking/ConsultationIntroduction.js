import { InlineWidget } from "react-calendly";
import "./ConsultationBooking.css";

const consultationIntroduction = () => {
  return (
    <main className="consultationPage">
      <InlineWidget
        url="https://calendly.com/hello-45w/introductory-call?background_color=e8e3d6&text_color=20123e&primary_color=8a26a0"
        style="min-width:320px;height:700px;"
      />
    </main>
  );
};

export default consultationIntroduction;
