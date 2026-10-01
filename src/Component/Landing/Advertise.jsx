const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    text: `"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."`,
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    text: `"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."`,
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    text: `"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."`,
  },
];

export default function Advertise() {
  return (
    <section className="relative overflow-hidden bg-[#F8F9FA] px-5 py-16 sm:px-8 md:py-20 lg:px-14 lg:py-24">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-[350px] w-[350px] rounded-full bg-[#D4FB20]/30 blur-[100px]" />

        <div className="absolute right-[10%] top-[-100px] h-[400px] w-[400px] rounded-full bg-[#D4FB20]/25 blur-[120px]" />

        <div className="absolute bottom-[-150px] left-[15%] h-[400px] w-[500px] rounded-full bg-[#BFD4FF]/40 blur-[120px]" />

        <div className="absolute bottom-[-100px] right-[-100px] h-[350px] w-[350px] rounded-full bg-[#D4FB20]/15 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1140px]">

        {/* Heading */}
        <div className="mb-10 grid grid-cols-1 items-center gap-8 md:mb-14 md:grid-cols-2 lg:gap-16">

          <div>
            <h2 className="max-w-[430px] text-3xl font-bold leading-[1.05] tracking-[-0.03em] text-[#101010] sm:text-4xl lg:text-[42px]">
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>

          <div>
            <p className="max-w-[430px] text-[10px] leading-[1.7] text-[#555] sm:text-[11px] md:text-xs">
              At ByteSpace, our vibrant community of learners and creators is
              at the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating
              on our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>

        </div>


        {/* Cards */}
        <div className="relative">

          {/* Desktop connector */}
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-[45px] hidden lg:block">
            <div className="border-t border-dashed border-[#1687FF]" />

            {/* Center cross */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <span className="absolute left-1/2 top-1/2 h-[30px] w-px -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#1687FF]" />
              <span className="absolute left-1/2 top-1/2 h-[30px] w-px -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#1687FF]" />
            </div>
          </div>


          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[18px]">

            {testimonials.map((item, index) => (
              <div
                key={item.name}
                className="relative rounded-[12px] bg-white px-4 pb-5 pt-4 shadow-[0_10px_35px_rgba(0,0,0,0.04)] sm:px-5"
              >

                {/* Profile */}
                <div className="relative z-10 mb-4 flex items-center gap-3">

                  <div className="h-[38px] w-[38px] shrink-0 overflow-hidden rounded-full border-[3px] border-[#F1F1F1]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-[10px] font-bold leading-tight text-[#171717] sm:text-[11px]">
                      {item.name}
                    </h3>

                    <p className="mt-[2px] text-[8px] font-medium text-[#1687FF] sm:text-[9px]">
                      {item.role}
                    </p>
                  </div>

                </div>


                {/* Quote */}
                <p className="text-[9px] leading-[1.65] text-[#666] sm:text-[10px]">
                  {item.text}
                </p>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}