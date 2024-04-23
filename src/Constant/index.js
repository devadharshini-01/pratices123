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

export const token ="eyJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsiLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiIxLjAiLCJpc3MiOiJodHRwczovL3ZpbmlmZXJhZGV2LmIyY2xvZ2luLmNvbS82YzQxMzg2My1jMzcyLTQ1YjUtYjFkYS02YTZjY2MzN2IxZjgvdjIuMC8iLCJzdWIiOiJkZWUxZTc0OC04MGMwLTQyYTAtODk2OS0yZWU4ZGMyMTA2OGQiLCJhdWQiOiI0MDM1ODU1OS0zMDg1LTQ0NDctOGIwZC02NGFlNGZlNTg5NjUiLCJleHAiOjE3MTM4ODE3NDEsIm5vbmNlIjoiMDE4ZjBiMzMtNGFmZC03YWQxLWJiNjctZjEwOTJiMjIwMDRkIiwiaWF0IjoxNzEzODc4MTQxLCJhdXRoX3RpbWUiOjE3MTM4NzgxMzcsIm9pZCI6ImRlZTFlNzQ4LTgwYzAtNDJhMC04OTY5LTJlZThkYzIxMDY4ZCIsImVtYWlscyI6WyJrYXJ0aGlrLnN1bmRhcmFtQGNvbmNlcnRpZGMuY29tIl0sInRmcCI6IkIyQ18xX3NpZ25pbiIsIm5iZiI6MTcxMzg3ODE0MX0.dK7PYnAgym3edHkE9cw_vhthT_ezNAoPrFMGnzOEBGJhOLinUbd9PWcw7kdNhrijIAK5TKsLhs9FSkHgy_m5BzZi3a7gD9p8M7rET0W54W4isB8EdAPnp1GDxluUo8BP0u9nTRyJCS5E8962gt-gsrtyQ35i0AYeChb062APTIW4OCeaS7lcpBPI39ZzQgq9odCpCxhnLSd-fngewSH0z3R2N1BZmxKzIlXYvGycSy-WZFqqdFgQT4Jb1eSVqlBVR-RUDJ8DJH2a04kNSyjZLU7gsXkJ7E6bgImuA04Hu_bw52dgIpfN5TizoLCw6IWIk2ACe8jB0EOhPMlYFGYYYQ"