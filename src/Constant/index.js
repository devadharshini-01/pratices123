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

export const token ="eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL3ZpbmlmZXJhZGV2LmIyY2xvZ2luLmNvbS82YzQxMzg2My1jMzcyLTQ1YjUtYjFkYS02YTZjY2MzN2IxZjgvdjIuMC8iLCJzdWIiOiJkZWUxZTc0OC04MGMwLTQyYTAtODk2OS0yZWU4ZGMyMTA2OGQiLCJhdWQiOiI0MDM1ODU1OS0zMDg1LTQ0NDctOGIwZC02NGFlNGZlNTg5NjUiLCJleHAiOjE3MTM3OTQ3NzIsIm5vbmNlIjoiMDE4ZjA0MTctM2U1Zi03OThiLWFmMTgtMTM4MjVjOGM4OTE5IiwiaWF0IjoxNzEzNzkxMTcyLCJhdXRoX3RpbWUiOjE3MTM3NTg4NjMsIm9pZCI6ImRlZTFlNzQ4LTgwYzAtNDJhMC04OTY5LTJlZThkYzIxMDY4ZCIsImVtYWlscyI6WyJrYXJ0aGlrLnN1bmRhcmFtQGNvbmNlcnRpZGMuY29tIl0sInRmcCI6IkIyQ18xX3NpZ25pbiIsIm5iZiI6MTcxMzc5MTE3Mn0.Hy3eL6mFkOr6uAh-Q9hxB_-Zl5-S4UuaP2cjXqa36PPI6MYEnBY1JLi4geR3wDJAtmlWSTYOdrQTId7fi8VNlyQC-OSj3-oXigqS1zSkfv0MHcEIP8iTZkn25NEQBNmZw02yllH5YSBe7mQir1Hx4ip8uBeIJuWwSMRBHfkYWDETiZwQAnZm2Jixor5CKPyxdWt0-RhjN3-Ma-twJn-1UKmjdwdS4TuNtLDjaXPqa9sd1ez8gT8DlV4kUfe208c8tCbII-r7viSmTzsaLUNliz-9K3DciD5_kmwxE0HwfGaRnndgpfe7YHTjH3elnK9V_YrsOTsIdsMn5riM8EiWOg"
