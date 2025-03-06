(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_b9f674._.js", {

"[project]/app/components/CertificateField.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/providers/ApplicantDetailsProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_import__("[project]/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript) <export default as v4>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const CertificateField = ()=>{
    _s();
    const { certificates, setCertificates, setDeleteItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApplicant"])();
    const [newCertificate, setNewCertificate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: "",
        name: "",
        issuer: "",
        issueDate: "",
        expirationDate: "",
        url: ""
    });
    const handleChange = (e)=>{
        setNewCertificate({
            ...newCertificate,
            [e.target.name]: e.target.value
        });
    };
    const handleAddCertificate = ()=>{
        setCertificates([
            ...certificates,
            {
                ...newCertificate,
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])()
            }
        ]);
        setNewCertificate({
            id: "",
            name: "",
            issuer: "",
            issueDate: "",
            expirationDate: "",
            url: ""
        });
    };
    const handleEditCertificate = (id)=>{
        const certificateToEdit = certificates.find((cert)=>cert.id === id);
        if (certificateToEdit) {
            setNewCertificate(certificateToEdit);
        }
    };
    const handleUpdateCertificate = ()=>{
        setCertificates(certificates.map((cert)=>cert.id === newCertificate.id ? newCertificate : cert));
        setNewCertificate({
            id: "",
            name: "",
            issuer: "",
            issueDate: "",
            expirationDate: "",
            url: ""
        });
    };
    const handleDeleteCertificate = (id)=>{
        setCertificates(certificates.filter((cert)=>cert.id !== id));
        setDeleteItems((prevDeleteItems)=>{
            return {
                ...prevDeleteItems,
                certificates: [
                    ...prevDeleteItems.certificates,
                    id
                ]
            };
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-800 rounded-lg p-8 border border-gray-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4 text-white",
                children: "Certificates"
            }, void 0, false, {
                fileName: "[project]/app/components/CertificateField.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "name",
                        placeholder: "Certificate Name",
                        value: newCertificate.name,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CertificateField.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "issuer",
                        placeholder: "Issuer",
                        value: newCertificate.issuer,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CertificateField.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "month" // Changed to month input for issue date
                        ,
                        name: "issueDate",
                        value: newCertificate.issueDate,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CertificateField.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "month" // Changed to month input for expiration date
                        ,
                        name: "expirationDate",
                        value: newCertificate.expirationDate,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CertificateField.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "url",
                        name: "url",
                        placeholder: "Certificate URL",
                        value: newCertificate.url,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CertificateField.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    newCertificate.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleUpdateCertificate,
                        className: "bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700",
                        children: "Update Certificate"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CertificateField.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAddCertificate,
                        className: "bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700",
                        children: "Add Certificate"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CertificateField.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/CertificateField.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            certificates.length > 0 ? certificates.map((cert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 text-gray-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: cert.name
                        }, void 0, false, {
                            fileName: "[project]/app/components/CertificateField.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this),
                        " issued by",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "opacity-70",
                            children: cert.issuer
                        }, void 0, false, {
                            fileName: "[project]/app/components/CertificateField.tsx",
                            lineNumber: 147,
                            columnNumber: 13
                        }, this),
                        " (",
                        cert.issueDate,
                        " ",
                        "- ",
                        cert.expirationDate,
                        ")",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2",
                            children: cert.url
                        }, void 0, false, {
                            fileName: "[project]/app/components/CertificateField.tsx",
                            lineNumber: 148,
                            columnNumber: 37
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleEditCertificate(cert.id),
                                    className: "bg-yellow-500 font-bold text-white w-1/2 p-2 rounded mr-2 hover:bg-yellow-600",
                                    children: "Edit"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CertificateField.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDeleteCertificate(cert.id),
                                    className: "bg-red-500 font-bold text-white w-1/2 p-2 rounded hover:bg-red-600",
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CertificateField.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/CertificateField.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this)
                    ]
                }, cert.id, true, {
                    fileName: "[project]/app/components/CertificateField.tsx",
                    lineNumber: 145,
                    columnNumber: 11
                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400",
                children: "No certificates added."
            }, void 0, false, {
                fileName: "[project]/app/components/CertificateField.tsx",
                lineNumber: 166,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/CertificateField.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
};
_s(CertificateField, "3zTa7YS7MMbau/9KIupVS0YcBOQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApplicant"]
    ];
});
_c = CertificateField;
const __TURBOPACK__default__export__ = CertificateField;
var _c;
__turbopack_refresh__.register(_c, "CertificateField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/CourseField.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/providers/ApplicantDetailsProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_import__("[project]/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript) <export default as v4>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const CourseField = ()=>{
    _s();
    const { courses, setCourses, setDeleteItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApplicant"])();
    const [newCourse, setNewCourse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: "",
        name: "",
        url: "",
        startDate: "",
        endDate: ""
    });
    const handleChange = (e)=>{
        setNewCourse({
            ...newCourse,
            [e.target.name]: e.target.value
        });
    };
    const handleAddCourse = ()=>{
        setCourses([
            ...courses,
            {
                ...newCourse,
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])()
            }
        ]);
        setNewCourse({
            id: "",
            name: "",
            url: "",
            startDate: "",
            endDate: ""
        });
    };
    const handleEditCourse = (id)=>{
        const courseToEdit = courses.find((course)=>course.id === id);
        if (courseToEdit) {
            setNewCourse(courseToEdit);
        }
    };
    const handleUpdateCourse = ()=>{
        setCourses(courses.map((course)=>course.id === newCourse.id ? newCourse : course));
        setNewCourse({
            id: "",
            name: "",
            url: "",
            startDate: "",
            endDate: ""
        });
    };
    const handleDeleteCourse = (id)=>{
        setCourses(courses.filter((course)=>course.id !== id));
        setDeleteItems((prevDeleteItems)=>{
            return {
                ...prevDeleteItems,
                courses: [
                    ...prevDeleteItems.courses,
                    id
                ]
            };
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-800 rounded-lg p-8 border border-gray-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4 text-white",
                children: "Courses"
            }, void 0, false, {
                fileName: "[project]/app/components/CourseField.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "name",
                        placeholder: "Course Name",
                        value: newCourse.name,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CourseField.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "url",
                        name: "url",
                        placeholder: "Course URL",
                        value: newCourse.url,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CourseField.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "month" // For start date
                        ,
                        name: "startDate",
                        value: newCourse.startDate,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CourseField.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "month" // For end date
                        ,
                        name: "endDate",
                        value: newCourse.endDate,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CourseField.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    newCourse.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleUpdateCourse,
                        className: "bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700",
                        children: "Update Course"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CourseField.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAddCourse,
                        className: "bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700",
                        children: "Add Course"
                    }, void 0, false, {
                        fileName: "[project]/app/components/CourseField.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/CourseField.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            courses.length > 0 ? courses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 text-gray-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: course.name
                        }, void 0, false, {
                            fileName: "[project]/app/components/CourseField.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this),
                        " (",
                        course.startDate,
                        " -",
                        " ",
                        course.endDate,
                        ")",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "opacity-70",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: course.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: course.url
                            }, void 0, false, {
                                fileName: "[project]/app/components/CourseField.tsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/CourseField.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleEditCourse(course.id),
                                    className: "bg-yellow-500 font-bold text-white w-1/2 p-2 rounded mr-2 hover:bg-yellow-600",
                                    children: "Edit"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CourseField.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDeleteCourse(course.id),
                                    className: "bg-red-500 font-bold text-white w-1/2 p-2 rounded hover:bg-red-600",
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/CourseField.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/CourseField.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this)
                    ]
                }, course.id, true, {
                    fileName: "[project]/app/components/CourseField.tsx",
                    lineNumber: 132,
                    columnNumber: 11
                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400",
                children: "No courses added."
            }, void 0, false, {
                fileName: "[project]/app/components/CourseField.tsx",
                lineNumber: 157,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/CourseField.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
};
_s(CourseField, "X8wAbxWmajCLxgUTfQRMXzINRVo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApplicant"]
    ];
});
_c = CourseField;
const __TURBOPACK__default__export__ = CourseField;
var _c;
__turbopack_refresh__.register(_c, "CourseField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/EducationField.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/providers/ApplicantDetailsProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_import__("[project]/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript) <export default as v4>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const EducationField = ()=>{
    _s();
    const { educations, setEducations, setDeleteItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApplicant"])();
    const [newEducation, setNewEducation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: "",
        institution: "",
        degree: "",
        field: "",
        startDate: "",
        endDate: ""
    });
    const handleChange = (e)=>{
        setNewEducation({
            ...newEducation,
            [e.target.name]: e.target.value
        });
    };
    const handleAddEducation = ()=>{
        setEducations([
            ...educations,
            {
                ...newEducation,
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])()
            }
        ]);
        setNewEducation({
            id: "",
            institution: "",
            degree: "",
            field: "",
            startDate: "",
            endDate: ""
        });
    };
    const handleEditEducation = (id)=>{
        const educationToEdit = educations.find((education)=>education.id === id);
        if (educationToEdit) {
            setNewEducation(educationToEdit);
        }
    };
    const handleUpdateEducation = ()=>{
        setEducations(educations.map((education)=>education.id === newEducation.id ? newEducation : education));
        setNewEducation({
            id: "",
            institution: "",
            degree: "",
            field: "",
            startDate: "",
            endDate: ""
        });
    };
    const handleDeleteEducation = (id)=>{
        setEducations(educations.filter((education)=>education.id !== id));
        setDeleteItems((prevDeleteItems)=>{
            return {
                ...prevDeleteItems,
                education: [
                    ...prevDeleteItems.education,
                    id
                ]
            };
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-800 rounded-lg p-8 border border-gray-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4 text-gray-300",
                children: "Educations"
            }, void 0, false, {
                fileName: "[project]/app/components/EducationField.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "institution",
                        placeholder: "Institution",
                        value: newEducation.institution,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/EducationField.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "degree",
                        placeholder: "Degree",
                        value: newEducation.degree,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/EducationField.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "field",
                        placeholder: "Field of Study",
                        value: newEducation.field,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/EducationField.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        name: "startDate",
                        value: newEducation.startDate,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/EducationField.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        name: "endDate",
                        value: newEducation.endDate,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/EducationField.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    newEducation.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleUpdateEducation,
                        className: "bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700",
                        children: "Update Education"
                    }, void 0, false, {
                        fileName: "[project]/app/components/EducationField.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAddEducation,
                        className: "bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700",
                        children: "Add Education"
                    }, void 0, false, {
                        fileName: "[project]/app/components/EducationField.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/EducationField.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            educations.length > 0 ? educations.map((education)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 text-gray-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: education.degree
                        }, void 0, false, {
                            fileName: "[project]/app/components/EducationField.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this),
                        " in ",
                        education.field,
                        " at",
                        " ",
                        education.institution,
                        " (",
                        education.startDate,
                        " - ",
                        education.endDate,
                        ")",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleEditEducation(education.id),
                                    className: "bg-yellow-500 font-bold text-white w-1/2 p-2 rounded mr-2 hover:bg-yellow-600",
                                    children: "Edit"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/EducationField.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDeleteEducation(education.id),
                                    className: "bg-red-500 font-bold text-white w-1/2 p-2 rounded hover:bg-red-600",
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/EducationField.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/EducationField.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this)
                    ]
                }, education.id, true, {
                    fileName: "[project]/app/components/EducationField.tsx",
                    lineNumber: 142,
                    columnNumber: 11
                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400",
                children: "No educations added."
            }, void 0, false, {
                fileName: "[project]/app/components/EducationField.tsx",
                lineNumber: 163,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/EducationField.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
};
_s(EducationField, "bMufsGnwRfcMg5oaDwQXcr0Mc1g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApplicant"]
    ];
});
_c = EducationField;
const __TURBOPACK__default__export__ = EducationField;
var _c;
__turbopack_refresh__.register(_c, "EducationField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/ExperienceField.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/providers/ApplicantDetailsProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_import__("[project]/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript) <export default as v4>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const ExperienceField = ()=>{
    _s();
    const { experience, setExperience, setDeleteItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApplicant"])();
    const [newExperience, setNewExperience] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: "",
        position: "",
        company: "",
        startDate: "",
        endDate: "",
        description: ""
    });
    const handleChange = (e)=>{
        setNewExperience({
            ...newExperience,
            [e.target.name]: e.target.value
        });
    };
    const handleAddExperience = ()=>{
        setExperience([
            ...experience,
            {
                ...newExperience,
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])()
            }
        ]);
        setNewExperience({
            id: "",
            position: "",
            company: "",
            startDate: "",
            endDate: "",
            description: ""
        });
    };
    const handleEditExperience = (id)=>{
        const experienceToEdit = experience.find((exp)=>exp.id === id);
        if (experienceToEdit) {
            setNewExperience(experienceToEdit);
        }
    };
    const handleUpdateExperience = ()=>{
        setExperience(experience.map((exp)=>exp.id === newExperience.id ? newExperience : exp));
        setNewExperience({
            id: "",
            position: "",
            company: "",
            startDate: "",
            endDate: "",
            description: ""
        });
    };
    const handleDeleteExperience = (id)=>{
        setExperience(experience.filter((exp)=>exp.id !== id));
        setDeleteItems((prevDeleteItems)=>{
            return {
                ...prevDeleteItems,
                experience: [
                    ...prevDeleteItems.experience,
                    id
                ]
            };
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-800 rounded-lg p-8 border border-gray-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4 text-white",
                children: "Experiences"
            }, void 0, false, {
                fileName: "[project]/app/components/ExperienceField.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "position",
                        placeholder: "Position",
                        value: newExperience.position,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ExperienceField.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "company",
                        placeholder: "Company",
                        value: newExperience.company,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ExperienceField.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "month" // Changed to month input for start date
                        ,
                        name: "startDate",
                        value: newExperience.startDate,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ExperienceField.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "month" // Changed to month input for end date
                        ,
                        name: "endDate",
                        value: newExperience.endDate,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ExperienceField.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        name: "description",
                        placeholder: "Experience Description",
                        value: newExperience.description,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ExperienceField.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    newExperience.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleUpdateExperience,
                        className: "bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700",
                        children: "Update Experience"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ExperienceField.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAddExperience,
                        className: "bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700",
                        children: "Add Experience"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ExperienceField.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ExperienceField.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            experience.length > 0 ? experience.map((exp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 text-gray-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: exp.position
                        }, void 0, false, {
                            fileName: "[project]/app/components/ExperienceField.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this),
                        " at",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "opacity-70",
                            children: exp.company
                        }, void 0, false, {
                            fileName: "[project]/app/components/ExperienceField.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this),
                        " (",
                        exp.startDate,
                        " -",
                        " ",
                        exp.endDate,
                        ")",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2",
                            children: exp.description
                        }, void 0, false, {
                            fileName: "[project]/app/components/ExperienceField.tsx",
                            lineNumber: 147,
                            columnNumber: 27
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleEditExperience(exp.id),
                                    className: "bg-yellow-500 font-bold text-white w-1/2 p-2 rounded mr-2 hover:bg-yellow-600",
                                    children: "Edit"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ExperienceField.tsx",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDeleteExperience(exp.id),
                                    className: "bg-red-500 font-bold text-white w-1/2 p-2 rounded hover:bg-red-600",
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ExperienceField.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ExperienceField.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this)
                    ]
                }, exp.id, true, {
                    fileName: "[project]/app/components/ExperienceField.tsx",
                    lineNumber: 144,
                    columnNumber: 11
                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400",
                children: "No experiences added."
            }, void 0, false, {
                fileName: "[project]/app/components/ExperienceField.tsx",
                lineNumber: 165,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ExperienceField.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
};
_s(ExperienceField, "8pje4LKQR8Rr+QZgCrWcb02q/9Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApplicant"]
    ];
});
_c = ExperienceField;
const __TURBOPACK__default__export__ = ExperienceField;
var _c;
__turbopack_refresh__.register(_c, "ExperienceField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/HobbyField.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/providers/ApplicantDetailsProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
const HobbyField = ()=>{
    _s();
    const { hobbies, setHobbies } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApplicant"])(); // State to manage hobbies
    const [newHobby, setNewHobby] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // State for new hobby input
    const [editIndex, setEditIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // Index of hobby being edited
    // Handle changes in the hobby input field
    const handleChange = (e)=>{
        setNewHobby(e.target.value);
    };
    // Handle adding a new hobby
    const handleAddHobby = ()=>{
        if (newHobby.trim() !== "") {
            setHobbies([
                ...hobbies,
                newHobby
            ]);
            setNewHobby(""); // Clear input field after adding
        }
    };
    // Handle editing an existing hobby
    const handleEditHobby = (index)=>{
        setEditIndex(index);
        setNewHobby(hobbies[index]); // Pre-fill input with the hobby to edit
    };
    // Handle updating the edited hobby
    const handleUpdateHobby = ()=>{
        if (newHobby.trim() !== "" && editIndex !== null) {
            const updatedHobbies = [
                ...hobbies
            ];
            updatedHobbies[editIndex] = newHobby;
            setHobbies(updatedHobbies);
            setNewHobby(""); // Clear input field after update
            setEditIndex(null); // Reset edit mode
        }
    };
    // Handle deleting a hobby
    const handleDeleteHobby = (index)=>{
        setHobbies(hobbies.filter((_, i)=>i !== index));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-800 rounded-lg p-8 border border-gray-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4 text-gray-300",
                children: "Hobbies"
            }, void 0, false, {
                fileName: "[project]/app/components/HobbyField.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: newHobby,
                        onChange: handleChange,
                        placeholder: "Enter hobby",
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/HobbyField.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    editIndex !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleUpdateHobby,
                        className: "bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700",
                        children: "Update Hobby"
                    }, void 0, false, {
                        fileName: "[project]/app/components/HobbyField.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAddHobby,
                        className: "bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700",
                        children: "Add Hobby"
                    }, void 0, false, {
                        fileName: "[project]/app/components/HobbyField.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/HobbyField.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            hobbies.length > 0 ? hobbies.map((hobby, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 text-gray-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: hobby
                        }, void 0, false, {
                            fileName: "[project]/app/components/HobbyField.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleEditHobby(index),
                                    className: "bg-yellow-500 font-bold text-white w-1/2 p-2 rounded mr-2 hover:bg-yellow-600",
                                    children: "Edit"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/HobbyField.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDeleteHobby(index),
                                    className: "bg-red-500 font-bold text-white w-1/2 p-2 rounded hover:bg-red-600",
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/HobbyField.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/HobbyField.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/app/components/HobbyField.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400",
                children: "No hobbies added."
            }, void 0, false, {
                fileName: "[project]/app/components/HobbyField.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/HobbyField.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
};
_s(HobbyField, "APkkspgpOMr75lCaLY6BRE32oFk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApplicant"]
    ];
});
_c = HobbyField;
const __TURBOPACK__default__export__ = HobbyField;
var _c;
__turbopack_refresh__.register(_c, "HobbyField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/LanguageField.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/providers/ApplicantDetailsProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_import__("[project]/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript) <export default as v4>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const LanguageField = ()=>{
    _s();
    const { languages, setLanguages, setDeleteItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApplicant"])();
    const [newLanguage, setNewLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: "",
        name: "",
        efficiency: ""
    });
    const handleChange = (e)=>{
        setNewLanguage({
            ...newLanguage,
            [e.target.name]: e.target.value
        });
    };
    const handleAddLanguage = ()=>{
        setLanguages([
            ...languages,
            {
                ...newLanguage,
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])()
            }
        ]);
        setNewLanguage({
            id: "",
            name: "",
            efficiency: ""
        });
    };
    const handleEditLanguage = (id)=>{
        const languageToEdit = languages.find((lang)=>lang.id === id);
        if (languageToEdit) {
            setNewLanguage(languageToEdit);
        }
    };
    const handleUpdateLanguage = ()=>{
        setLanguages(languages.map((lang)=>lang.id === newLanguage.id ? newLanguage : lang));
        setNewLanguage({
            id: "",
            name: "",
            efficiency: ""
        });
    };
    const handleDeleteLanguage = (id)=>{
        setLanguages(languages.filter((lang)=>lang.id !== id));
        setDeleteItems((prevDeleteItems)=>{
            return {
                ...prevDeleteItems,
                languages: [
                    ...prevDeleteItems.languages,
                    id
                ]
            };
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-800 rounded-lg p-8 border border-gray-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4 text-gray-300",
                children: "Languages"
            }, void 0, false, {
                fileName: "[project]/app/components/LanguageField.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "name",
                        placeholder: "Language Name",
                        value: newLanguage.name,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/LanguageField.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "efficiency",
                        placeholder: "Efficiency (e.g., Beginner, Intermediate, Fluent)",
                        value: newLanguage.efficiency,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/LanguageField.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    newLanguage.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleUpdateLanguage,
                        className: "bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700",
                        children: "Update Language"
                    }, void 0, false, {
                        fileName: "[project]/app/components/LanguageField.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAddLanguage,
                        className: "bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700",
                        children: "Add Language"
                    }, void 0, false, {
                        fileName: "[project]/app/components/LanguageField.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/LanguageField.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            languages.length > 0 ? languages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 text-gray-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: lang.name
                        }, void 0, false, {
                            fileName: "[project]/app/components/LanguageField.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this),
                        " (",
                        lang.efficiency,
                        ")",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleEditLanguage(lang.id),
                                    className: "bg-yellow-500 font-bold text-white w-1/2 p-2 rounded mr-2 hover:bg-yellow-600",
                                    children: "Edit"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LanguageField.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDeleteLanguage(lang.id),
                                    className: "bg-red-500 font-bold text-white w-1/2 p-2 rounded hover:bg-red-600",
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/LanguageField.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/LanguageField.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this)
                    ]
                }, lang.id, true, {
                    fileName: "[project]/app/components/LanguageField.tsx",
                    lineNumber: 108,
                    columnNumber: 11
                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400",
                children: "No languages added."
            }, void 0, false, {
                fileName: "[project]/app/components/LanguageField.tsx",
                lineNumber: 127,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/LanguageField.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
};
_s(LanguageField, "29kpkhfg3cmWUQK+/2bsco9r7xI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApplicant"]
    ];
});
_c = LanguageField;
const __TURBOPACK__default__export__ = LanguageField;
var _c;
__turbopack_refresh__.register(_c, "LanguageField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/ProjectField.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/providers/ApplicantDetailsProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_import__("[project]/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript) <export default as v4>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const ProjectField = ()=>{
    _s();
    const { projects, setProjects, setDeleteItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApplicant"])();
    const [newProject, setNewProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: "",
        name: "",
        description: "",
        startDate: "",
        endDate: "",
        url: ""
    });
    const handleChange = (e)=>{
        setNewProject({
            ...newProject,
            [e.target.name]: e.target.value
        });
    };
    const handleAddProject = ()=>{
        setProjects([
            ...projects,
            {
                ...newProject,
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])()
            }
        ]);
        setNewProject({
            id: "",
            name: "",
            description: "",
            startDate: "",
            endDate: "",
            url: ""
        });
    };
    const handleEditProject = (id)=>{
        const projectToEdit = projects.find((project)=>project.id === id);
        if (projectToEdit) {
            setNewProject(projectToEdit);
        }
    };
    const handleUpdateProject = ()=>{
        setProjects(projects.map((project)=>project.id === newProject.id ? newProject : project));
        setNewProject({
            id: "",
            name: "",
            description: "",
            startDate: "",
            endDate: "",
            url: ""
        });
    };
    const handleDeleteProject = (id)=>{
        setProjects(projects.filter((project)=>project.id !== id));
        setDeleteItems((prevDeleteItems)=>{
            return {
                ...prevDeleteItems,
                projects: [
                    ...prevDeleteItems.projects,
                    id
                ]
            };
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-800 rounded-lg p-8 border border-gray-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4 text-white",
                children: "Projects"
            }, void 0, false, {
                fileName: "[project]/app/components/ProjectField.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "name",
                        placeholder: "Project Name",
                        value: newProject.name,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProjectField.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "description",
                        placeholder: "Project Description",
                        value: newProject.description,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProjectField.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "month" // Changed to month input for start date
                        ,
                        name: "startDate",
                        value: newProject.startDate,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProjectField.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "month" // Changed to month input for end date
                        ,
                        name: "endDate",
                        value: newProject.endDate,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProjectField.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "url",
                        placeholder: "Project URL",
                        value: newProject.url,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProjectField.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    newProject.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleUpdateProject,
                        className: "bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700",
                        children: "Update Project"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProjectField.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAddProject,
                        className: "bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700",
                        children: "Add Project"
                    }, void 0, false, {
                        fileName: "[project]/app/components/ProjectField.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ProjectField.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            projects.length > 0 ? projects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 text-gray-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: project.name
                        }, void 0, false, {
                            fileName: "[project]/app/components/ProjectField.tsx",
                            lineNumber: 144,
                            columnNumber: 13
                        }, this),
                        " (",
                        project.startDate,
                        " -",
                        " ",
                        project.endDate,
                        ")",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleEditProject(project.id),
                                    className: "bg-yellow-500 font-bold text-white w-1/2 p-2 rounded mr-2 hover:bg-yellow-600",
                                    children: "Edit"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ProjectField.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDeleteProject(project.id),
                                    className: "bg-red-500 font-bold text-white w-1/2 p-2 rounded hover:bg-red-600",
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ProjectField.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ProjectField.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this)
                    ]
                }, project.id, true, {
                    fileName: "[project]/app/components/ProjectField.tsx",
                    lineNumber: 143,
                    columnNumber: 11
                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400",
                children: "No projects added."
            }, void 0, false, {
                fileName: "[project]/app/components/ProjectField.tsx",
                lineNumber: 163,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ProjectField.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
};
_s(ProjectField, "v+CXB0+p1TYmHaqfUEvJ/N60a3I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApplicant"]
    ];
});
_c = ProjectField;
const __TURBOPACK__default__export__ = ProjectField;
var _c;
__turbopack_refresh__.register(_c, "ProjectField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/SocialField.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/providers/ApplicantDetailsProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_import__("[project]/node_modules/uuid/dist/esm-browser/v4.js [app-client] (ecmascript) <export default as v4>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const SocialField = ()=>{
    _s();
    const { socials, setSocials, setDeleteItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApplicant"])();
    const [newSocial, setNewSocial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: "",
        name: "",
        url: ""
    });
    const handleChange = (e)=>{
        setNewSocial({
            ...newSocial,
            [e.target.name]: e.target.value
        });
    };
    const handleAddSocial = ()=>{
        setSocials([
            ...socials,
            {
                ...newSocial,
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$browser$2f$v4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])()
            }
        ]);
        setNewSocial({
            id: "",
            name: "",
            url: ""
        });
    };
    const handleEditSocial = (id)=>{
        const socialToEdit = socials.find((social)=>social.id === id);
        if (socialToEdit) {
            setNewSocial(socialToEdit);
        }
    };
    const handleUpdateSocial = ()=>{
        setSocials(socials.map((social)=>social.id === newSocial.id ? newSocial : social));
        setNewSocial({
            id: "",
            name: "",
            url: ""
        });
    };
    const handleDeleteSocial = (id)=>{
        setSocials(socials.filter((social)=>social.id !== id));
        setDeleteItems((prevDeleteItems)=>{
            return {
                ...prevDeleteItems,
                socials: [
                    ...prevDeleteItems.socials,
                    id
                ]
            };
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-800 rounded-lg p-8 border border-gray-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4 text-gray-300",
                children: "Socials"
            }, void 0, false, {
                fileName: "[project]/app/components/SocialField.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "name",
                        placeholder: "Social Name",
                        value: newSocial.name,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SocialField.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "url",
                        placeholder: "Social URL (e.g., https://twitter.com)",
                        value: newSocial.url,
                        onChange: handleChange,
                        className: "p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SocialField.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    newSocial.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleUpdateSocial,
                        className: "bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700",
                        children: "Update Social"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SocialField.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleAddSocial,
                        className: "bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700",
                        children: "Add Social"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SocialField.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SocialField.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            socials.length > 0 ? socials.map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 text-gray-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: social.url.startsWith("http") ? social.url : `https://${social.url}`,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "block w-full text-white font-bold rounded-md mb-2",
                            children: social.name
                        }, void 0, false, {
                            fileName: "[project]/app/components/SocialField.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleEditSocial(social.id),
                                    className: "bg-yellow-500 font-bold text-white w-1/2 p-2 rounded mr-2 hover:bg-yellow-600",
                                    children: "Edit"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/SocialField.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDeleteSocial(social.id),
                                    className: "bg-red-500 font-bold text-white w-1/2 p-2 rounded hover:bg-red-600",
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/SocialField.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/SocialField.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this)
                    ]
                }, social.id, true, {
                    fileName: "[project]/app/components/SocialField.tsx",
                    lineNumber: 108,
                    columnNumber: 11
                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400",
                children: "No socials added."
            }, void 0, false, {
                fileName: "[project]/app/components/SocialField.tsx",
                lineNumber: 138,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/SocialField.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
};
_s(SocialField, "EE8q7r+v0bui+mcUbi8xztJt5b4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApplicant"]
    ];
});
_c = SocialField;
const __TURBOPACK__default__export__ = SocialField;
var _c;
__turbopack_refresh__.register(_c, "SocialField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/applicant/[id]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CertificateField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/CertificateField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CourseField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/CourseField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$EducationField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/EducationField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ExperienceField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/ExperienceField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HobbyField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/HobbyField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$LanguageField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/LanguageField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProjectField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/ProjectField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SocialField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/SocialField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/providers/ApplicantDetailsProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
const ApplicantDetails = ()=>{
    _s();
    const { loading, error, firstName, setFirstName, lastName, setLastName, email, setEmail, phone, setPhone, summary, setSummary, skills, setSkills, hobbies, setHobbies, experience, setExperience, projects, setProjects, educations, setEducations, certificates, setCertificates, courses, setCourses, socials, setSocials, languages, setLanguages, updateApplicant, applicant } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApplicant"])();
    const handleDownload = (fileUrl, fileName)=>{
        const link = document.createElement("a");
        link.href = fileUrl;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const handleSave = async ()=>{
        await updateApplicant();
        // You can add save functionality here (API call to update applicant data)
        console.log("Saved Applicant:");
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white text-center py-12",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/app/applicant/[id]/page.tsx",
            lineNumber: 76,
            columnNumber: 12
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-red-500 text-center py-12",
            children: error
        }, void 0, false, {
            fileName: "[project]/app/applicant/[id]/page.tsx",
            lineNumber: 80,
            columnNumber: 12
        }, this);
    }
    if (!applicant) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white text-center py-12",
            children: "No applicant found."
        }, void 0, false, {
            fileName: "[project]/app/applicant/[id]/page.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#01070a] text-white py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 flex space-x-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-1/2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-800 rounded-lg p-8 mb-8 border border-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl font-bold mb-4 text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: firstName,
                                            onChange: (e)=>setFirstName(e.target.value),
                                            className: "bg-transparent text-white text-4xl font-bold border-b border-gray-600 outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: lastName,
                                            onChange: (e)=>setLastName(e.target.value),
                                            className: "bg-transparent text-white text-4xl font-bold border-b border-gray-600 outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-300 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Email: "
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    value: email,
                                                    onChange: (e)=>setEmail(e.target.value),
                                                    className: "bg-transparent w-full text-white border-b border-gray-600 outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Phone: "
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: phone,
                                                    onChange: (e)=>setPhone(e.target.value),
                                                    className: "bg-transparent w-full text-white border-b border-gray-600 outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/applicant/[id]/page.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-2 space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-800 rounded-lg p-8 border border-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold mb-4 text-white",
                                                    children: "CV Summary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: summary || "",
                                                    onChange: (e)=>setSummary(e.target.value),
                                                    className: "bg-transparent text-white w-full h-24 border-b border-gray-600 outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$EducationField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProjectField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ExperienceField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CertificateField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CourseField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$LanguageField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SocialField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$HobbyField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-800 rounded-lg p-8 border border-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold mb-4 text-white",
                                                    children: "Files"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "list-disc list-inside space-y-2 text-gray-300",
                                                    children: applicant.file?.length ? applicant.file.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            onClick: ()=>handleDownload(item.url, item.name),
                                                            children: [
                                                                item.name,
                                                                item.extension
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 25
                                                        }, this)) : ""
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-1 space-y-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-800 rounded-lg p-8 border border-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold mb-4 text-white",
                                                children: "Skills"
                                            }, void 0, false, {
                                                fileName: "[project]/app/applicant/[id]/page.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: applicant.cv.skills?.length ? applicant.cv.skills.map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-gray-700 px-3 py-1 rounded-md text-sm text-gray-300 border border-gray-600",
                                                        children: skill
                                                    }, index, false, {
                                                        fileName: "[project]/app/applicant/[id]/page.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 27
                                                    }, this)) : ""
                                            }, void 0, false, {
                                                fileName: "[project]/app/applicant/[id]/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/applicant/[id]/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/applicant/[id]/page.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/applicant/[id]/page.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-1/2 bg-gray-800 rounded-lg p-8 border border-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-end pb-8 border-b border-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl font-bold text-white",
                                    children: "CV Preview"
                                }, void 0, false, {
                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSave(),
                                        className: "mt-4 font-bold w-full text-center bg-orange-600 hover:bg-orange-400 text-white py-2 px-8 rounded-md transition-colors",
                                        children: "Save"
                                    }, void 0, false, {
                                        fileName: "[project]/app/applicant/[id]/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/applicant/[id]/page.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-8 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl font-bold mb-4 text-white",
                                    children: [
                                        firstName,
                                        " ",
                                        lastName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-300 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Email: ",
                                                email
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Phone: ",
                                                phone
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/applicant/[id]/page.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-2 space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold mb-4 text-white",
                                                    children: "CV Summary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-300",
                                                    children: summary || "N/A"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this),
                                        educations?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold mb-4 text-white",
                                                    children: "Educations"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 19
                                                }, this),
                                                educations.map((education, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: education.degree
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/applicant/[id]/page.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 23
                                                            }, this),
                                                            " in ",
                                                            education.field,
                                                            " ",
                                                            "at ",
                                                            education.institution,
                                                            "(",
                                                            education.startDate,
                                                            " -",
                                                            " ",
                                                            education.endDate,
                                                            ")"
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/app/applicant/[id]/page.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 240,
                                            columnNumber: 17
                                        }, this) : "",
                                        projects?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold mb-4 text-white",
                                                    children: "Projects"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 19
                                                }, this),
                                                projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: project.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, index, false, {
                                                        fileName: "[project]/app/applicant/[id]/page.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 257,
                                            columnNumber: 17
                                        }, this) : "",
                                        experience?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold mb-4 text-white",
                                                    children: "Experiences"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, this),
                                                experience.map((experience, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: experience.position
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/applicant/[id]/page.tsx",
                                                                lineNumber: 278,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "opacity-70",
                                                                children: [
                                                                    " ",
                                                                    "at ",
                                                                    experience.company
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/applicant/[id]/page.tsx",
                                                                lineNumber: 279,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: experience.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/applicant/[id]/page.tsx",
                                                                lineNumber: 283,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/app/applicant/[id]/page.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, this) : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-1 space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold mb-4 text-white",
                                                    children: "Skills"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: skills?.length ? skills.map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-gray-700 px-3 py-1 rounded-md text-sm text-gray-300 border border-gray-600",
                                                            children: skill
                                                        }, index, false, {
                                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 25
                                                        }, this)) : ""
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this),
                                        certificates?.length ? certificates.map((certificate, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "py-8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold mb-4 text-white",
                                                    children: certificate.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 23
                                                }, this)
                                            }, index, false, {
                                                fileName: "[project]/app/applicant/[id]/page.tsx",
                                                lineNumber: 313,
                                                columnNumber: 21
                                            }, this)) : "",
                                        courses?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold mb-4 text-white",
                                                    children: "Courses"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 19
                                                }, this),
                                                courses.map((course, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: course.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, index, false, {
                                                        fileName: "[project]/app/applicant/[id]/page.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 322,
                                            columnNumber: 17
                                        }, this) : "",
                                        languages?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold mb-4 text-white",
                                                    children: "Languages"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 19
                                                }, this),
                                                languages.map((language, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: language.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/applicant/[id]/page.tsx",
                                                                lineNumber: 343,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "opacity-70",
                                                                children: [
                                                                    " ",
                                                                    "- ",
                                                                    language.efficiency
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/applicant/[id]/page.tsx",
                                                                lineNumber: 344,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/app/applicant/[id]/page.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this) : "",
                                        socials?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold mb-4 text-white",
                                                    children: "Socials"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 19
                                                }, this),
                                                socials.map((social, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: social.url.startsWith("http") ? social.url : `https://${social.url}`,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "block w-full text-white font-bold rounded-md mb-2",
                                                            children: social.name
                                                        }, social.id, false, {
                                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                                            lineNumber: 362,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, index, false, {
                                                        fileName: "[project]/app/applicant/[id]/page.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 356,
                                            columnNumber: 17
                                        }, this) : "",
                                        hobbies?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold mb-4 text-white",
                                                    children: "Hobbies"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 385,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "list-disc list-inside space-y-2 text-gray-300",
                                                    children: hobbies.map((hobby, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: hobby
                                                        }, index, false, {
                                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 388,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 384,
                                            columnNumber: 17
                                        }, this) : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/applicant/[id]/page.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/applicant/[id]/page.tsx",
                    lineNumber: 204,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/applicant/[id]/page.tsx",
            lineNumber: 92,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/applicant/[id]/page.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
};
_s(ApplicantDetails, "IFmIWzERfgwXbjQtF3sJNou+YCI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApplicant"]
    ];
});
_c = ApplicantDetails;
const __TURBOPACK__default__export__ = ApplicantDetails;
var _c;
__turbopack_refresh__.register(_c, "ApplicantDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/applicant/[id]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_b9f674._.js.map