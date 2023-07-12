import { InlineWidget } from "react-calendly";
import "./ConsultationBooking.css";

const consultationPackage = () => {
  return (
    <main className="consultationPage consultationPadding">
      <InlineWidget url="https://calendly.com/hello-45w/60-minute-meeting?background_color=e8e3d6&text_color=20123e&primary_color=8a26a0" />
    </main>
  );
};

export default consultationPackage;
