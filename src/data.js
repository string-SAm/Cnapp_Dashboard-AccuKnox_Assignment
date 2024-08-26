export const data = {
  title: "CNAPP Dashboard",
  categories: [
    {
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          type: "pie_chart",
          title: "Cloud Accounts",
          data: {
            labels: ["Connected", "Not Connected"],
            values: [2, 2],
            colors: ["#007bff", "#cce5ff"],
          },
        },
        {
          type: "pie_chart",
          title: "Cloud Account Risk Assessment",
          data: {
            labels: ["Failed", "Warning", "Not Avoidable", "Passed"],
            values: [1689, 681, 36, 723],
            colors: ["#dc3545", "#ffc107", "#17a2b8", "#28a745"],
          },
        },
      ],
    },
    {
      name: "CWPP Dashboard",
      widgets: [
        {
          type: "bar_chart",
          title: "Cloud Accounts",
          data: {
            labels: ["Connected", "Not Connected"],
            values: [2, 2],
            colors: ["#007bff", "#cce5ff"],
          },
        },
        {
          type: "bar_chart",
          title: "Cloud Account Risk Assessment",
          data: {
            labels: ["Failed", "Warning", "Not Avoidable", "Passed"],
            values: [1689, 681, 36, 723],
            colors: ["#dc3545", "#ffc107", "#17a2b8", "#28a745"],
          },
        },
      ],
    },
    {
      name: "Registry Scan",
      widgets: [
        {
          type: "bar_chart",
          title: "Cloud Accounts",
          data: {
            labels: ["Connected", "Not Connected"],
            values: [2, 2],
            colors: ["#007bff", "#cce5ff"],
          },
        },
        {
          type: "bar_chart",
          title: "Cloud Account Risk Assessment",
          data: {
            labels: ["Failed", "Warning", "Not Avoidable", "Passed"],
            values: [1689, 681, 36, 723],
            colors: ["#dc3545", "#ffc107", "#17a2b8", "#28a745"],
          },
        },
      ],
    },
  ],
};
