import { useState, useMemo, useEffect, useCallback } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiDownload,
  FiExternalLink,
  FiFileText,
  FiX,
} from "react-icons/fi";
import CERTIFICATES from "../../data/certificates";

const Certificates = () => {
  const [selectedId, setSelectedId] = useState(null);

  const selectedCertificate = useMemo(
    () =>
      CERTIFICATES.find((certificate) => certificate.id === selectedId) ?? null,
    [selectedId],
  );

  const currentIndex = useMemo(
    () =>
      CERTIFICATES.findIndex((certificate) => certificate.id === selectedId),
    [selectedId],
  );

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setSelectedId(CERTIFICATES[currentIndex - 1].id);
    }
  }, [currentIndex]);

  const goToNext = useCallback(() => {
    if (currentIndex < CERTIFICATES.length - 1) {
      setSelectedId(CERTIFICATES[currentIndex + 1].id);
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPrevious();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNext();
      } else if (event.key === "Escape") {
        setSelectedId(null);
      }
    };

    if (selectedId) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedId, goToPrevious, goToNext]);

  if (CERTIFICATES.length === 0) {
    return (
      <div className="flex flex-col gap-3 w-full">
        <h3 className="self-center text-2xl font-bold">MY CERTIFICATES</h3>
        <div className="flex flex-col justify-start items-start">
          <div className="border-2 border-primaryBorder p-6 rounded-md bg-[var(--body_primaryCard)] shadow-lg">
            <h4 className="text-xl font-semibold mb-2">No certificates yet</h4>
            <p className="text-sm text-[var(--body_text)]">
              Your certificates will appear here once added.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 w-full max-h-50 overflow-auto">
      <h3 className="self-center text-2xl font-bold">MY CERTIFICATES</h3>
      <div className="flex flex-col justify-start items-start">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 w-full">
          {CERTIFICATES.map((certificate) => (
            <button
              key={certificate.id}
              type="button"
              onClick={() => setSelectedId(certificate.id)}
              className="group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-600 focus-visible:ring-offset-2"
            >
              <div className="h-full overflow-hidden border-2 border-primaryBorder rounded-md bg-[var(--body_primaryCard)] shadow-lg transition-transform duration-200 group-hover:-translate-y-1 group-hover:bg-[var(--body_primaryDetail)]">
                <div className="relative aspect-[1.2] overflow-hidden border-b border-primaryBorder bg-[radial-gradient(circle_at_top,_rgba(15,118,110,0.14),_transparent_58%),linear-gradient(180deg,rgba(220,239,232,0.85),rgba(255,255,255,1))]">
                  {certificate.kind === "image" ? (
                    <img
                      src={certificate.src}
                      alt={certificate.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
                      <div className="inline-flex rounded-full border border-primaryBorder bg-[var(--body_primaryCard)] p-4 text-yellow-700">
                        <FiFileText className="size-8" />
                      </div>
                      <p className="text-sm font-medium text-[var(--body_text)]">
                        PDF certificate
                      </p>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-linear-to-t from-black/70 to-transparent p-4 text-white">
                    <span className="border border-white/20 bg-[var(--body_primaryCard)]/10 px-2 py-1 rounded text-xs font-medium">
                      {certificate.label}
                    </span>
                    <span className="text-xs uppercase tracking-[0.18em] text-white/75">
                      {certificate.extension.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 p-5">
                  <h4 className="line-clamp-2 text-lg font-semibold tracking-[-0.03em]">
                    {certificate.title}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-yellow-700">
                    <span>Open</span>
                    <FiExternalLink className="size-4" />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'var(--body_overlay)', backdropFilter: 'blur(8px)' }}
          onClick={() => setSelectedId(null)}
        >
          <div
            className="flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-[2rem] shadow-2xl"
            style={{ border: '1px solid var(--body_primaryBorder)', backgroundColor: 'var(--body_primaryCard)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-primaryBorder bg-[var(--body_primaryCard)] px-5 py-4">
              <div className="min-w-0 flex-1">
                <h2 className="truncate text-xl font-semibold tracking-[-0.03em] text-[var(--body_text)]">
                  {selectedCertificate.title}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={selectedCertificate.src}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-primaryBorder bg-[var(--body_primaryCard)] px-4 py-2 text-sm font-medium text-[var(--body_text)] hover:bg-[var(--body_primaryDetail)]"
                >
                  Open
                  <FiExternalLink className="size-4" />
                </a>
                <a
                  href={selectedCertificate.src}
                  download
                  className="inline-flex items-center gap-2 rounded-md bg-yellow-700 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-800"
                >
                  Download
                  <FiDownload className="size-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedId(null)}
                  className="rounded-md p-2 text-[var(--body_text)] hover:bg-[var(--body_primaryDetail)]"
                  aria-label="Close viewer"
                >
                  <FiX className="size-4" />
                </button>
              </div>
            </div>

            <div className="relative flex-1">
              {selectedCertificate.kind === "image" ? (
                <div className="h-full min-h-[70vh] overflow-auto">
                  <div className="mx-auto h-full min-h-[70vh] w-full max-w-6xl overflow-hidden rounded-[1.5rem] border border-primaryBorder bg-[var(--body_primaryCard)]">
                    <img
                      src={selectedCertificate.src}
                      alt={selectedCertificate.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              ) : (
                <div className="mx-auto h-full min-h-[70vh] w-full max-w-6xl overflow-hidden rounded-[1.5rem] border border-primaryBorder bg-[var(--body_primaryCard)]">
                  <iframe
                    src={selectedCertificate.src}
                    title={selectedCertificate.title}
                    className="h-[70vh] w-full"
                  />
                </div>
              )}

              {currentIndex > 0 && (
                <button
                  type="button"
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-primaryBorder bg-[var(--body_primaryCard)] p-3 text-[var(--body_text)] shadow-lg hover:bg-[var(--body_primaryDetail)]"
                  style={{ backgroundColor: 'var(--body_primaryCard)', color: 'var(--body_text)' }}
                  aria-label="Previous certificate"
                >
                  <FiChevronLeft className="size-6" />
                </button>
              )}

              {currentIndex < CERTIFICATES.length - 1 && (
                <button
                  type="button"
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-primaryBorder bg-[var(--body_primaryCard)] p-3 text-[var(--body_text)] shadow-lg hover:bg-[var(--body_primaryDetail)]"
                  style={{ backgroundColor: 'var(--body_primaryCard)', color: 'var(--body_text)' }}
                  aria-label="Next certificate"
                >
                  <FiChevronRight className="size-6" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
