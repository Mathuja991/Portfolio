"use client";

const uploadedCvPath = "/cv/mathuja-parameshwaran-cv.pdf";

export default function CV() {
    return (
        <div className="fixed inset-0 bg-white">
            <iframe
                src={`${uploadedCvPath}#toolbar=1&navpanes=0`}
                title="CV"
                className="w-full h-full border-0"
            />
        </div>
    );
}
