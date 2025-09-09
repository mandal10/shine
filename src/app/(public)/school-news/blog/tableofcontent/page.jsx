import TableOfContents from "./TableOfContent";

export default function SchoolAuraContent() {
  return (
    <div className=" ">
      {/* Sidebar TOC */}
      <aside className=" w-full">
        <TableOfContents />
      </aside>

      {/* Main Content */}
      <main className="mt-10 space-y-10">
        {/* Introduction */}
        <section id="introduction">
          <h1 className="text-2xl font-bold mb-4 text-darkblue">Introduction</h1>
          <p className="text-darkblue leading-relaxed">
            SchoolAura is a modern digital platform designed to streamline
            school operations, enhance communication, and improve the overall
            learning experience for students, teachers, and parents. With
            features like attendance tracking, online exams, digital reports,
            and fee management, it transforms traditional schooling into a
            smarter, tech-driven ecosystem.
          </p>
        </section>

        {/* Features */}
        <section id="features">
          <h1 className="text-2xl font-bold mb-4 text-darkblue">Key Features</h1>
          <p className="text-darkblue leading-relaxed">
            SchoolAura provides a wide range of features that support both
            academics and administration. Below are the core modules:
          </p>

          <section id="student-management" className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-darkblue">Student Management</h2>
            <ul className="list-disc list-inside text-darkbluespace-y-1">
              <li>Online admission and enrollment system.</li>
              <li>Student profiles with academic records.</li>
              <li>Automated ID card and certificate generation.</li>
            </ul>
          </section>

          <section id="attendance" className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-darkblue">Attendance Tracking</h2>
            <p className="text-darkblue leading-relaxed">
              Teachers can mark attendance digitally, and parents receive instant
              notifications if their child is absent. This ensures transparency
              and improved accountability.
            </p>
          </section>

          <section id="exams" className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-darkblue">Exams & Reports</h2>
            <p className="text-darkblue leading-relaxed">
              Schools can conduct online exams, generate report cards, and
              analyze student performance using smart dashboards.
            </p>
          </section>

          <section id="fee-management" className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-darkblue">Fee Management</h2>
            <p className="text-darkblue leading-relaxed">
              Parents can pay fees online with multiple payment options.
              Automated reminders reduce delays, and schools get real-time
              payment reports.
            </p>
          </section>
        </section>

        {/* Benefits */}
        <section id="benefits">
          <h1 className="text-2xl font-bold mb-4 text-darkblue">Benefits</h1>
          <ul className="list-disc list-inside text-darkblue space-y-2">
            <li>📱 Seamless communication between teachers, students, and parents.</li>
            <li>⏳ Saves time by automating repetitive administrative tasks.</li>
            <li>📊 Data-driven insights for better academic planning.</li>
            <li>🌐 Easy access from anywhere through web and mobile apps.</li>
          </ul>
        </section>

        {/* Mobile App */}
        <section id="mobile-app">
          <h1 className="text-2xl font-bold mb-4 text-darkblue">Mobile App</h1>
          <p className="text-darkblue leading-relaxed">
            SchoolAura is available on both Android and iOS, allowing parents,
            teachers, and students to stay connected anytime. The mobile app
            supports homework updates, notifications, online payments, and
            exam schedules on the go.
          </p>
        </section>

        {/* Conclusion */}
        <section id="conclusion">
          <h1 className="text-2xl font-bold mb-4 text-darkblue">Conclusion</h1>
          <p className="text-darkblue leading-relaxed">
            SchoolAura is more than just a school management software—it is a
            complete ecosystem that empowers schools to operate more efficiently
            and provides students with a modern learning experience. By bridging
            the gap between administration, teachers, parents, and students,
            SchoolAura is shaping the future of education.
          </p>
        </section>
      </main>
    </div>
  );
}
