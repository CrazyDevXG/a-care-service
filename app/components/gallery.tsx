"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { projects } from "../lib/content";

export default function Gallery() {
  const [filter, setFilter] = useState("ทั้งหมด");
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const [index, setIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const categories = ["ทั้งหมด", ...new Set(projects.map((project) => project.category))];

  useEffect(() => {
    if (selected) dialog.current?.showModal();
    else dialog.current?.close();
  }, [selected]);

  function openProject(project: (typeof projects)[number]) {
    setIndex(0);
    setSelected(project);
  }

  function step(delta: number) {
    if (!selected) return;
    setIndex((current) => (current + delta + selected.images.length) % selected.images.length);
  }

  return (
    <>
      <div className="gallery-filters" aria-label="ประเภทผลงาน">
        {categories.map((category) => (
          <button key={category} type="button" className={filter === category ? "selected" : ""} aria-pressed={filter === category} onClick={() => setFilter(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {projects.filter((project) => filter === "ทั้งหมด" || project.category === filter).map((project) => (
          <button className="project-tile" key={project.title} type="button" onClick={() => openProject(project)} aria-label={`ดูรูป ${project.title}`}>
            <div className="project-photo">
              <Image src={project.image} alt={project.alt} fill sizes="(max-width: 720px) 100vw, 33vw" />
              <span className="project-plus" aria-hidden="true">+</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.category}</p>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="gallery-dialog"
        onCancel={() => setSelected(null)}
        onClick={(event) => { if (event.target === dialog.current) setSelected(null); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") step(-1);
          if (event.key === "ArrowRight") step(1);
        }}
      >
        {selected && (
          <>
            <button className="dialog-close" autoFocus aria-label="ปิดรูปผลงาน" type="button" onClick={() => setSelected(null)}>✕</button>
            <div className="dialog-image">
              <Image src={selected.images[index]} alt={selected.alt} fill sizes="90vw" style={{ objectFit: "contain" }} />
              {selected.images.length > 1 && (
                <>
                  <button className="dialog-nav dialog-prev" type="button" aria-label="รูปก่อนหน้า" onClick={() => step(-1)}>‹</button>
                  <button className="dialog-nav dialog-next" type="button" aria-label="รูปถัดไป" onClick={() => step(1)}>›</button>
                </>
              )}
            </div>
            <h3>{selected.title}</h3>
            <p>{selected.description}{selected.images.length > 1 ? ` · ${index + 1}/${selected.images.length}` : ""}</p>
          </>
        )}
      </dialog>
    </>
  );
}
