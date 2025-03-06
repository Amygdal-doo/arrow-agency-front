(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_000af9._.js", {

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
"[project]/app/applicant/[id]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CertificateField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/CertificateField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$EducationField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/EducationField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ExperienceField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/ExperienceField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProjectField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/ProjectField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$providers$2f$ApplicantDetailsProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/providers/ApplicantDetailsProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
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
            lineNumber: 72,
            columnNumber: 12
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-red-500 text-center py-12",
            children: error
        }, void 0, false, {
            fileName: "[project]/app/applicant/[id]/page.tsx",
            lineNumber: 76,
            columnNumber: 12
        }, this);
    }
    if (!applicant) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white text-center py-12",
            children: "No applicant found."
        }, void 0, false, {
            fileName: "[project]/app/applicant/[id]/page.tsx",
            lineNumber: 81,
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
                                            lineNumber: 93,
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
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                    lineNumber: 92,
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
                                                    lineNumber: 108,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    value: email,
                                                    onChange: (e)=>setEmail(e.target.value),
                                                    className: "bg-transparent w-full text-white border-b border-gray-600 outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Phone: "
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: phone,
                                                    onChange: (e)=>setPhone(e.target.value),
                                                    className: "bg-transparent w-full text-white border-b border-gray-600 outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/applicant/[id]/page.tsx",
                            lineNumber: 91,
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
                                                    lineNumber: 133,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: summary || "",
                                                    onChange: (e)=>setSummary(e.target.value),
                                                    className: "bg-transparent text-white w-full h-24 border-b border-gray-600 outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$EducationField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ProjectField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ExperienceField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CertificateField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 149,
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
                                                    lineNumber: 152,
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
                                                            lineNumber: 156,
                                                            columnNumber: 25
                                                        }, this)) : ""
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-1 space-y-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-800 rounded-lg p-8 border border-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold mb-4 text-white",
                                                    children: "Skills"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: applicant.cv.skills?.length ? applicant.cv.skills.map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-gray-700 px-3 py-1 rounded-md text-sm text-gray-300 border border-gray-600",
                                                            children: skill
                                                        }, index, false, {
                                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 27
                                                        }, this)) : ""
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-800 rounded-lg p-8 border border-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold mb-4 text-white",
                                                    children: "Courses"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 17
                                                }, this),
                                                applicant.cv.courses?.length ? applicant.cv.courses.map((course, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: course.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, index, false, {
                                                        fileName: "[project]/app/applicant/[id]/page.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 25
                                                    }, this)) : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 190,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-800 rounded-lg p-8 border border-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold mb-4 text-white",
                                                    children: "Languages"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 17
                                                }, this),
                                                applicant.cv.languages?.length ? applicant.cv.languages.map((language, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: language.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/applicant/[id]/page.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 27
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
                                                                lineNumber: 212,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/app/applicant/[id]/page.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 25
                                                    }, this)) : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, this),
                                        applicant.cv.socials?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-800 rounded-lg p-8 border border-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold mb-4 text-white",
                                                    children: "Socials"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 19
                                                }, this),
                                                applicant.cv.socials.map((social, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: social.url.startsWith("http") ? social.url : `https://${social.url}`,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "block w-full text-white font-bold rounded-md mb-2",
                                                            children: social.name
                                                        }, social.id, false, {
                                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, index, false, {
                                                        fileName: "[project]/app/applicant/[id]/page.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 23
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 223,
                                            columnNumber: 17
                                        }, this) : "",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-800 rounded-lg p-8 border border-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold mb-4 text-white",
                                                    children: "Hobbies"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "list-disc list-inside space-y-2 text-gray-300",
                                                    children: applicant.cv?.hobbies?.length ? applicant.cv.hobbies.map((hobby, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: hobby
                                                        }, index, false, {
                                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 27
                                                        }, this)) : ""
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 252,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/applicant/[id]/page.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/applicant/[id]/page.tsx",
                    lineNumber: 89,
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
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSave(),
                                        className: "mt-4 font-bold w-full text-center bg-orange-600 hover:bg-orange-400 text-white py-2 px-8 rounded-md transition-colors",
                                        children: "Save"
                                    }, void 0, false, {
                                        fileName: "[project]/app/applicant/[id]/page.tsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                    lineNumber: 270,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/applicant/[id]/page.tsx",
                            lineNumber: 268,
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
                                    lineNumber: 282,
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
                                            lineNumber: 286,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Phone: ",
                                                phone
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 287,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/applicant/[id]/page.tsx",
                            lineNumber: 281,
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
                                                    lineNumber: 296,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-300",
                                                    children: summary || "N/A"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 295,
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
                                                    lineNumber: 304,
                                                    columnNumber: 19
                                                }, this),
                                                educations.map((education, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: education.degree
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/applicant/[id]/page.tsx",
                                                                lineNumber: 309,
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
                                                        lineNumber: 308,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 303,
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
                                                    lineNumber: 321,
                                                    columnNumber: 19
                                                }, this),
                                                projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: project.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                                            lineNumber: 326,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, index, false, {
                                                        fileName: "[project]/app/applicant/[id]/page.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 320,
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
                                                    lineNumber: 336,
                                                    columnNumber: 19
                                                }, this),
                                                experience.map((experience, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: experience.position
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/applicant/[id]/page.tsx",
                                                                lineNumber: 341,
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
                                                                lineNumber: 342,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: experience.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/applicant/[id]/page.tsx",
                                                                lineNumber: 346,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/app/applicant/[id]/page.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 335,
                                            columnNumber: 17
                                        }, this) : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                    lineNumber: 293,
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
                                                    lineNumber: 359,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: skills?.length ? skills.map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-gray-700 px-3 py-1 rounded-md text-sm text-gray-300 border border-gray-600",
                                                            children: skill
                                                        }, index, false, {
                                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                                            lineNumber: 363,
                                                            columnNumber: 25
                                                        }, this)) : ""
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 358,
                                            columnNumber: 15
                                        }, this),
                                        certificates?.length ? certificates.map((certificate, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "py-8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold mb-4 text-white",
                                                    children: certificate.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 377,
                                                    columnNumber: 23
                                                }, this)
                                            }, index, false, {
                                                fileName: "[project]/app/applicant/[id]/page.tsx",
                                                lineNumber: 376,
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
                                                    lineNumber: 386,
                                                    columnNumber: 19
                                                }, this),
                                                courses.map((course, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: course.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, index, false, {
                                                        fileName: "[project]/app/applicant/[id]/page.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 385,
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
                                                    lineNumber: 401,
                                                    columnNumber: 19
                                                }, this),
                                                languages.map((language, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: language.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/applicant/[id]/page.tsx",
                                                                lineNumber: 406,
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
                                                                lineNumber: 407,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/app/applicant/[id]/page.tsx",
                                                        lineNumber: 405,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 400,
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
                                                    lineNumber: 420,
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
                                                            lineNumber: 425,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, index, false, {
                                                        fileName: "[project]/app/applicant/[id]/page.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 419,
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
                                                    lineNumber: 448,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "list-disc list-inside space-y-2 text-gray-300",
                                                    children: hobbies.map((hobby, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: hobby
                                                        }, index, false, {
                                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                                            lineNumber: 453,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                                    lineNumber: 451,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/applicant/[id]/page.tsx",
                                            lineNumber: 447,
                                            columnNumber: 17
                                        }, this) : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/applicant/[id]/page.tsx",
                                    lineNumber: 356,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/applicant/[id]/page.tsx",
                            lineNumber: 291,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/applicant/[id]/page.tsx",
                    lineNumber: 267,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/applicant/[id]/page.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/applicant/[id]/page.tsx",
        lineNumber: 86,
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

//# sourceMappingURL=app_000af9._.js.map