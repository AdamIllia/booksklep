import React, { useEffect, useRef } from "react";
import "./container.css";

const issues = [
  {
    id: 1,
    src: "/image/issue8.png",
    number: "8",
    soldout: true,
    place: "Europe",
    bgColor: "#f0e5bc",
   },
  {
    id: 2,
    src: "/image/issue7.png",
    number: "7",
    soldout: false,
    place: "Europe",
    bgColor: "#f25d9c", 
  },
  {
    id: 3,
    src: "/image/issue6.png",
    number: "6",
    soldout: true,
    place: "Europe",
    bgColor: "#ffffff", 
  },
  {
    id: 4,
    src: "/image/issue5.png",
    number: "5",
    soldout: true,
    place: "Whole World",
    bgColor: "#40e0d0", 
  },
  {
    id: 5,
    src: "/image/issue4.png",
    number: "4",
    soldout: false,
    place: "Only Poland",
    bgColor: "#ff4500" 
  },
  {
    id: 6,
    src: "/image/issue3.png",
    number: "3",
    soldout: false,
    place: "Only Spain",
    bgColor: "#ffa500", 
  },
  {
    id: 7,
    src: "/image/issue2.png",
    number: "2",
    soldout: false,
    place: "Only USA",
    bgColor: "#0074D9", 
  },
  {
    id: 8,
    src: "/image/issue1.png",
    number: "1",
    soldout: false,
    place: "Europe",
    bgColor: "#e4002b", 
  },
];

export default function IssueList() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bg = entry.target.getAttribute("data-bg");
            document.body.style.backgroundColor = bg;
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const scrollToIssue = (index) => {
    const el = sectionRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  return (
    <>
    <div className="scroll-container">
      {issues.map((item, index) => (
        <div
          key={item.id}
          ref={(el) => (sectionRefs.current[index] = el)}
          data-bg={item.bgColor}
          className="issue-container"
        >
          <img
            src={item.src}
            alt={`Issue ${item.number}`}
            className="issue-image"
          />
          <div className="issue-text">
            <h1>
              {item.soldout
                ? `Issue #${item.number} is sold out.`
                : `Issue #${item.number}`}
            </h1>
            {item.soldout ? (
              <p>
                If you are lucky, you may get the last pieces in{" "}
                <a href="https://backstagetalks.com/stocklist.php" style={{textDecorationLine: "none"}}>selected stores</a>.
              </p>
            ) : (
              <>
                <a href="https://brot.sk/products/backstage-talks-6?_pos=2&_sid=1c5730cc8&_ss=r" style={{color: "white", textDecorationLine: "none"}}>BUY HERE</a>
                <p>
                  or in <a href="https://backstagetalks.com/stocklist.php" style={{color: "white",textDecorationLine: "none" }}>selected store</a>
                </p>
              </>
            )}
          </div>
        </div>
      ))}
    </div>

       <div className="scroll-links">
        {issues.map((item, index) => (
          <div
            key={item.id}
            className="scroll-link"
            onClick={() => scrollToIssue(index)}
          >
            Issue #{item.number}
          </div>
        ))}
      </div>

    </>
  );
}

