export const createAction = (val) => ({
  REQUEST: `${val}_REQUEST`,
  SUCCESS: `${val}_SUCCESS`,
  ERROR: `${val}_ERROR`,
  RESET: `${val}_RESET`,
});

export const RetailerHeaderName=[
  { name: "displayId", 
  displayName: "RetailerId" 
 
},
  {
    name: "companyName",
    displayName: "RetailerName",
  },
  { name: "address", displayName: "Location" },
  {
    name: "joinedDate",

    displayName: "joinedDate",
  },
  {
    name: "numberOfStoreLocations",

    displayName: "No of Locations",
  },
  {
    name: "monthlySalesSort",
    displayName: "No of Orders",
  },

]

export const DistributorHeaderName=[
  {
    name: "displayId",
    displayName: "DistributorId",
    sort: true,
  },
  {
    name: "companyName",
    displayName: "DistributorName",
    sort: true,
  },
  {
    name: "address",
    displayName: "Location",
    sort: false,
  },
  {
    name: "ENVB",
    displayName: "ERP/INV System",
  },
  {
    name: "noOfMappedRetailers",
    displayName: "Linked Retailers",
  },
  {
    name: "monthlyOrders",
    displayName: "Monthly Orders",
  },
  {
    name: "monthlySales",
    displayName: "monthlySales",
  },
]
// export const sidebarData = [
//   { name: "Distributor", path: "/Distributor" },
//   { name: "Retailer", path: "/Retailer" },
// ];



export const AdminData = [
  { name: "Dashboard", path: "/Dashboard" },
  { name: "Distributor", path: "/Distributor" },
  { name: "Exchange", path: "/Exchange" },
  { name: "Retailer", path: "/Retailer" },
  { name: "Reports", path: "/Reports" },

]

export const DistributorData=[
  { name: "Dashboard", path: "/Dashboard" },
  { name: "Exchange", path: "/Exchange" },
  { name: "Retailer", path: "/Retailer" },
  { name: "Orders", path: "/ddOrder" },
  { name: "Platform Fees", path: "/ssfee" },
  { name: "Reports", path: "/Distributor/reports" }
]

export const RetailerData=[
  { name: "Dashboard", path: "/Retailer" },
  { name: "Orders", path: "/Retailer" },
  { name: "Distributors", path: "/Retailer" },
  { name: "Platform Fees", path: "/Retailer" },
  { name: "Reports", path: "/Retailer" }
]

export const token ="eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL3ZpbmlmZXJhZGV2LmIyY2xvZ2luLmNvbS82YzQxMzg2My1jMzcyLTQ1YjUtYjFkYS02YTZjY2MzN2IxZjgvdjIuMC8iLCJzdWIiOiJkZWUxZTc0OC04MGMwLTQyYTAtODk2OS0yZWU4ZGMyMTA2OGQiLCJhdWQiOiI0MDM1ODU1OS0zMDg1LTQ0NDctOGIwZC02NGFlNGZlNTg5NjUiLCJleHAiOjE3MTQwNTI1MDgsIm5vbmNlIjoiMDE4ZjEwNjYtMDBjNS03YmNmLThjZWItNjQ0NTY5MTljOTAxIiwiaWF0IjoxNzE0MDQ4OTA4LCJhdXRoX3RpbWUiOjE3MTM5NjU0MzEsIm9pZCI6ImRlZTFlNzQ4LTgwYzAtNDJhMC04OTY5LTJlZThkYzIxMDY4ZCIsImVtYWlscyI6WyJrYXJ0aGlrLnN1bmRhcmFtQGNvbmNlcnRpZGMuY29tIl0sInRmcCI6IkIyQ18xX3NpZ25pbiIsIm5iZiI6MTcxNDA0ODkwOH0.Ys_KOHi955gL6kc_7hInciHpe5yglT4csKCQJaU4mobyuTf06hlaM5Ua8pxpb1ZoBBCxyEH6GLOYoyEv3B7G0yYCfykAZ_oNftKVTK6PJxUtzJcvgm4J4SSSBIcfOKDHyWsJGxXsh0IVI3zi59N69_eYwuRVQkt1J3LW6cXbhHRuvTRO4hQcDMw8wBb4ekywxJrf9151H5yCsW-r-EL6tLymw1PrZ_xZJU6zWduEHOvL0_GbBp4ELkgAX8Vlzt1-JVlJXn0GTyqStXfM30Sy8OAuFDrk8sWwFTRQHyFtSZzCD3QcMYqKHgCzH6ijPr0W8Kz2JFaL-7hMnPfTB8bUVA"