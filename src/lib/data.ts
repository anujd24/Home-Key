// TEMPORARY DATA

export let role = "admin";

export const propertiesData = [
  {
    id: 1,
    propertyId: "PROP123456",
    name: "Sunny Apartments",
    owner: "John Doe",
    email: "john@doe.com",
    photo:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1234567890",
    location: "123 Main St, Anytown, USA",
    rent: "$1200/month",
    type: "2BHK Apartment",
    status: "Available",
    tenants: [],
  },
  {
    id: 2,
    propertyId: "PROP123457",
    name: "Cozy Cottage",
    owner: "Jane Smith",
    email: "jane@smith.com",
    photo:
      "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "9876543210",
    location: "45 Elm St, Riverside, USA",
    rent: "$1800/month",
    type: "3BHK House",
    status: "Rented",
    tenants: ["Alice Brown"],
  },
  {
    id: 3,
    propertyId: "PROP123458",
    name: "Urban Heights",
    owner: "Mike Geller",
    email: "mike@geller.com",
    photo:
      "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "4567891230",
    location: "78 Park Ave, Downtown, USA",
    rent: "$2500/month",
    type: "4BHK Apartment",
    status: "Available",
    tenants: [],
  },
  {
    id: 4,
    propertyId: "PROP123459",
    name: "Serene Villas",
    owner: "Anna Santiago",
    email: "anna@santiago.com",
    photo:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "3216549870",
    location: "12 Maple Dr, Suburbia, USA",
    rent: "$3500/month",
    type: "5BHK Villa",
    status: "Available",
    tenants: [],
  },
  {
    id: 5,
    propertyId: "PROP123460",
    name: "Lakeview Apartments",
    owner: "Jay French",
    email: "jay@french.com",
    photo:
      "https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1597534862",
    location: "90 Lakeview Rd, Lakeside, USA",
    rent: "$2000/month",
    type: "3BHK Apartment",
    status: "Rented",
    tenants: ["Bob Green"],
  },
  {
    id: 6,
    propertyId: "PROP123461",
    name: "City Center Loft",
    owner: "Allen Black",
    email: "allen@black.com",
    photo:
      "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "7894561230",
    location: "120 Market St, City Center, USA",
    rent: "$2200/month",
    type: "1BHK Loft",
    status: "Available",
    tenants: [],
  },
  {
    id: 7,
    propertyId: "PROP123462",
    name: "Green Meadows",
    owner: "Ophelia Castro",
    email: "ophelia@castro.com",
    photo:
      "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "6549873210",
    location: "35 Greenway Ln, Countryside, USA",
    rent: "$2800/month",
    type: "4BHK Townhouse",
    status: "Available",
    tenants: [],
  },
  {
    id: 8,
    propertyId: "PROP123463",
    name: "Hilltop Haven",
    owner: "Derek Briggs",
    email: "derek@briggs.com",
    photo:
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "1237894560",
    location: "50 Hilltop Rd, Highland, USA",
    rent: "$3200/month",
    type: "5BHK House",
    status: "Rented",
    tenants: ["Clara West"],
  },
  {
    id: 9,
    propertyId: "PROP123464",
    name: "Coastal Retreat",
    owner: "Jane Doe",
    email: "jane@doe.com",
    photo:
      "https://images.pexels.com/photos/210602/pexels-photo-210602.jpeg?auto=compress&cs=tinysrgb&w=1200",
    phone: "9517538426",
    location: "80 Beachside Dr, Coastal City, USA",
    rent: "$4000/month",
    type: "Beach House",
    status: "Available",
    tenants: [],
  },
];

export const tenantsData = [
    {
      id: 1,
      tenantId: "TEN123456",
      name: "John Doe",
      email: "john.doe@example.com",
      photo:
        "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      property: "Ocean View Apartment",
      address: "123 Seaside Blvd, Miami, FL",
      paymentHistory: [
        { month: "January", amount: 2000, status: "Paid" },
        { month: "February", amount: 2000, status: "Paid" },
      ],
      rentalAgreementStatus: "Active",
    },
    {
      id: 2,
      tenantId: "TEN789012",
      name: "Jane Doe",
      email: "jane.doe@example.com",
      photo:
        "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      property: "Downtown Loft",
      address: "456 Main St, New York, NY",
      paymentHistory: [
        { month: "January", amount: 3500, status: "Paid" },
        { month: "February", amount: 3500, status: "Pending" },
      ],
      rentalAgreementStatus: "Active",
    },
    {
      id: 3,
      tenantId: "TEN345678",
      name: "Mike Geller",
      email: "mike.geller@example.com",
      photo:
        "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      property: "Suburban House",
      address: "789 Pine St, Springfield, IL",
      paymentHistory: [
        { month: "January", amount: 1500, status: "Paid" },
        { month: "February", amount: 1500, status: "Paid" },
      ],
      rentalAgreementStatus: "Active",
    },
    {
      id: 4,
      tenantId: "TEN901234",
      name: "Jay French",
      email: "jay.french@example.com",
      photo:
        "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      property: "Luxury Condo",
      address: "101 Palm Drive, Los Angeles, CA",
      paymentHistory: [
        { month: "January", amount: 5000, status: "Paid" },
        { month: "February", amount: 5000, status: "Pending" },
      ],
      rentalAgreementStatus: "Active",
    },
    {
      id: 5,
      tenantId: "TEN567890",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      photo:
        "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      property: "City Studio",
      address: "202 Central Ave, Boston, MA",
      paymentHistory: [
        { month: "January", amount: 1200, status: "Paid" },
        { month: "February", amount: 1200, status: "Paid" },
      ],
      rentalAgreementStatus: "Active",
    },
    {
      id: 6,
      tenantId: "TEN678901",
      name: "Anna Santiago",
      email: "anna.santiago@example.com",
      photo:
        "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      property: "Lakefront Villa",
      address: "303 Lakeview Rd, Austin, TX",
      paymentHistory: [
        { month: "January", amount: 4000, status: "Paid" },
        { month: "February", amount: 4000, status: "Pending" },
      ],
      rentalAgreementStatus: "Active",
    },
    {
      id: 7,
      tenantId: "TEN890123",
      name: "Allen Black",
      email: "allen.black@example.com",
      photo:
        "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      property: "Mountain Cabin",
      address: "404 Alpine St, Denver, CO",
      paymentHistory: [
        { month: "January", amount: 2500, status: "Paid" },
        { month: "February", amount: 2500, status: "Paid" },
      ],
      rentalAgreementStatus: "Active",
    },
    {
      id: 8,
      tenantId: "TEN234567",
      name: "Ophelia Castro",
      email: "ophelia.castro@example.com",
      photo:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      property: "Urban Penthouse",
      address: "505 Skyline Ave, Seattle, WA",
      paymentHistory: [
        { month: "January", amount: 8000, status: "Paid" },
        { month: "February", amount: 8000, status: "Pending" },
      ],
      rentalAgreementStatus: "Active",
    },
    {
      id: 9,
      tenantId: "TEN456789",
      name: "Derek Briggs",
      email: "derek.briggs@example.com",
      photo:
        "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      property: "Countryside Cottage",
      address: "606 Meadow Ln, Nashville, TN",
      paymentHistory: [
        { month: "January", amount: 1800, status: "Paid" },
        { month: "February", amount: 1800, status: "Paid" },
      ],
      rentalAgreementStatus: "Active",
    },
    {
      id: 10,
      tenantId: "TEN789345",
      name: "John Glover",
      email: "john.glover@example.com",
      photo:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1200",
      phone: "1234567890",
      property: "Modern Duplex",
      address: "707 Grove St, Chicago, IL",
      paymentHistory: [
        { month: "January", amount: 3200, status: "Paid" },
        { month: "February", amount: 3200, status: "Pending" },
      ],
      rentalAgreementStatus: "Active",
    },
  ];

  
  export const propertyManagersData = [
    {
      id: 1,
      name: "John Doe",
      managedProperties: ["Ocean View Apartment"],
      email: "john.doe@propertymanager.com",
      phone: "1234567890",
      address: "123 Main St, Miami, FL",
    },
    {
      id: 2,
      name: "Jane Doe",
      managedProperties: ["Downtown Loft"],
      email: "jane.doe@propertymanager.com",
      phone: "1234567890",
      address: "456 Main St, New York, NY",
    },
    {
      id: 3,
      name: "Mike Geller",
      managedProperties: ["Suburban House"],
      email: "mike.geller@propertymanager.com",
      phone: "1234567890",
      address: "789 Pine St, Springfield, IL",
    },
    {
      id: 4,
      name: "Jay French",
      managedProperties: ["Luxury Condo", "Urban Penthouse"],
      email: "jay.french@propertymanager.com",
      phone: "1234567890",
      address: "101 Palm Drive, Los Angeles, CA",
    },
    {
      id: 5,
      name: "Jane Smith",
      managedProperties: ["City Studio"],
      email: "jane.smith@propertymanager.com",
      phone: "1234567890",
      address: "202 Central Ave, Boston, MA",
    },
    {
      id: 6,
      name: "Anna Santiago",
      managedProperties: ["Lakefront Villa"],
      email: "anna.santiago@propertymanager.com",
      phone: "1234567890",
      address: "303 Lakeview Rd, Austin, TX",
    },
    {
      id: 7,
      name: "Allen Black",
      managedProperties: ["Mountain Cabin", "Countryside Cottage"],
      email: "allen.black@propertymanager.com",
      phone: "1234567890",
      address: "404 Alpine St, Denver, CO",
    },
    {
      id: 8,
      name: "Ophelia Castro",
      managedProperties: ["Urban Penthouse"],
      email: "ophelia.castro@propertymanager.com",
      phone: "1234567890",
      address: "505 Skyline Ave, Seattle, WA",
    },
    {
      id: 9,
      name: "Derek Briggs",
      managedProperties: ["Countryside Cottage", "Modern Duplex"],
      email: "derek.briggs@propertymanager.com",
      phone: "1234567890",
      address: "606 Meadow Ln, Nashville, TN",
    },
    {
      id: 10,
      name: "John Glover",
      managedProperties: ["Modern Duplex"],
      email: "john.glover@propertymanager.com",
      phone: "1234567890",
      address: "707 Grove St, Chicago, IL",
    },
  ];
 
  export const propertyCategoriesData = [
    {
      id: 1,
      name: "Apartment",
      propertyManagers: ["John Doe", "Jane Smith"],
    },
    {
      id: 2,
      name: "House",
      propertyManagers: ["Mike Geller", "Jay French"],
    },
    {
      id: 3,
      name: "Condo",
      propertyManagers: ["Anna Santiago", "Ophelia Castro"],
    },
    {
      id: 4,
      name: "Loft",
      propertyManagers: ["Allen Black", "Derek Briggs"],
    },
    {
      id: 5,
      name: "Villa",
      propertyManagers: ["Lora French", "Sue Brady"],
    },
    {
      id: 6,
      name: "Cottage",
      propertyManagers: ["Harriet Alvarado", "Mayme Keller"],
    },
    {
      id: 7,
      name: "Penthouse",
      propertyManagers: ["Gertrude Roy", "Rosa Singleton"],
    },
    {
      id: 8,
      name: "Studio",
      propertyManagers: ["Effie Lynch", "Brett Flowers"],
    },
    {
      id: 9,
      name: "Townhouse",
      propertyManagers: ["Hannah Bowman", "Betty Obrien"],
    },
    {
      id: 10,
      name: "Farmhouse",
      propertyManagers: ["Alice Phelps", "Russell Davidson"],
    },
  ];

  export const propertyListingsData = [
    {
      id: 1,
      name: "Sunny Apartment 1B",
      capacity: 4, // Maximum number of tenants
      location: "Anytown, USA",
      price: 1500,
      propertyManager: "Joseph Padilla",
    },
    {
      id: 2,
      name: "Cozy House 2A",
      capacity: 6,
      location: "Oakland, USA",
      price: 2500,
      propertyManager: "Blake Joseph",
    },
    {
      id: 3,
      name: "Modern Condo 3C",
      capacity: 3,
      location: "San Francisco, USA",
      price: 2200,
      propertyManager: "Tom Bennett",
    },
    {
      id: 4,
      name: "Spacious Loft 4B",
      capacity: 5,
      location: "Los Angeles, USA",
      price: 2000,
      propertyManager: "Aaron Collins",
    },
    {
      id: 5,
      name: "Charming Villa 5A",
      capacity: 8,
      location: "Miami, USA",
      price: 3500,
      propertyManager: "Iva Frank",
    },
    {
      id: 6,
      name: "Luxury Condo 5B",
      capacity: 4,
      location: "New York, USA",
      price: 4000,
      propertyManager: "Leila Santos",
    },
    {
      id: 7,
      name: "Family Townhouse 7A",
      capacity: 6,
      location: "Chicago, USA",
      price: 2800,
      propertyManager: "Carrie Walton",
    },
    {
      id: 8,
      name: "Elegant Studio 6B",
      capacity: 2,
      location: "Seattle, USA",
      price: 1800,
      propertyManager: "Christopher Butler",
    },
    {
      id: 9,
      name: "Seaside Cottage 6C",
      capacity: 4,
      location: "Santa Monica, USA",
      price: 2100,
      propertyManager: "Marc Miller",
    },
    {
      id: 10,
      name: "Modern Penthouse 6D",
      capacity: 3,
      location: "Las Vegas, USA",
      price: 5000,
      propertyManager: "Ophelia Marsh",
    },
  ];

  export const rentalAgreementsData = [
    {
      id: 1,
      property: "Sunny Apartment 1B",
      tenant: "John Doe",
      landlord: "Joseph Padilla",
      leaseStartDate: "2024-01-01",
      leaseEndDate: "2025-01-01",
      rentAmount: 1500,
    },
    {
      id: 2,
      property: "Cozy House 2A",
      tenant: "Jane Smith",
      landlord: "Blake Joseph",
      leaseStartDate: "2024-02-01",
      leaseEndDate: "2025-02-01",
      rentAmount: 2500,
    },
    {
      id: 3,
      property: "Modern Condo 3C",
      tenant: "Mike Geller",
      landlord: "Tom Bennett",
      leaseStartDate: "2024-03-01",
      leaseEndDate: "2025-03-01",
      rentAmount: 2200,
    },
    {
      id: 4,
      property: "Spacious Loft 4B",
      tenant: "Sarah Connor",
      landlord: "Aaron Collins",
      leaseStartDate: "2024-04-01",
      leaseEndDate: "2025-04-01",
      rentAmount: 2000,
    },
    {
      id: 5,
      property: "Charming Villa 5A",
      tenant: "Emma Watson",
      landlord: "Iva Frank",
      leaseStartDate: "2024-05-01",
      leaseEndDate: "2025-05-01",
      rentAmount: 3500,
    },
    {
      id: 6,
      property: "Luxury Condo 5B",
      tenant: "James Smith",
      landlord: "Leila Santos",
      leaseStartDate: "2024-06-01",
      leaseEndDate: "2025-06-01",
      rentAmount: 4000,
    },
    {
      id: 7,
      property: "Family Townhouse 7A",
      tenant: "Rachel Green",
      landlord: "Carrie Walton",
      leaseStartDate: "2024-07-01",
      leaseEndDate: "2025-07-01",
      rentAmount: 2800,
    },
    {
      id: 8,
      property: "Elegant Studio 6B",
      tenant: "Ross Geller",
      landlord: "Christopher Butler",
      leaseStartDate: "2024-08-01",
      leaseEndDate: "2025-08-01",
      rentAmount: 1800,
    },
    {
      id: 9,
      property: "Seaside Cottage 6C",
      tenant: "Monica Geller",
      landlord: "Marc Miller",
      leaseStartDate: "2024-09-01",
      leaseEndDate: "2025-09-01",
      rentAmount: 2100,
    },
    {
      id: 10,
      property: "Modern Penthouse 6D",
      tenant: "Phoebe Buffay",
      landlord: "Ophelia Marsh",
      leaseStartDate: "2024-10-01",
      leaseEndDate: "2025-10-01",
      rentAmount: 5000,
    },
  ];
 
  export const propertyInspectionsData = [
    {
      id: 1,
      property: "Sunny Apartment 1B",
      inspector: "John Doe",
      date: "2025-01-01",
    },
    {
      id: 2,
      property: "Cozy House 2A",
      inspector: "Jane Smith",
      date: "2025-01-02",
    },
    {
      id: 3,
      property: "Modern Condo 3C",
      inspector: "Mike Geller",
      date: "2025-01-03",
    },
    {
      id: 4,
      property: "Spacious Loft 4B",
      inspector: "Sarah Connor",
      date: "2025-01-04",
    },
    {
      id: 5,
      property: "Charming Villa 5A",
      inspector: "Emma Watson",
      date: "2025-01-05",
    },
    {
      id: 6,
      property: "Luxury Condo 5B",
      inspector: "James Smith",
      date: "2025-01-06",
    },
    {
      id: 7,
      property: "Family Townhouse 7A",
      inspector: "Rachel Green",
      date: "2025-01-07",
    },
    {
      id: 8,
      property: "Elegant Studio 6B",
      inspector: "Ross Geller",
      date: "2025-01-08",
    },
    {
      id: 9,
      property: "Seaside Cottage 6C",
      inspector: "Monica Geller",
      date: "2025-01-09",
    },
    {
      id: 10,
      property: "Modern Penthouse 6D",
      inspector: "Phoebe Buffay",
      date: "2025-01-10",
    },
  ];
 
  export const propertyMaintenanceTasksData = [
    {
      id: 1,
      property: "Sunny Apartment 1A",
      task: "Fix leaking faucet",
      maintenanceStaff: "Anthony Boone",
      dueDate: "2025-01-01",
    },
    {
      id: 2,
      property: "Cozy House 2A",
      task: "Repair damaged door",
      maintenanceStaff: "Clifford Bowen",
      dueDate: "2025-01-01",
    },
    {
      id: 3,
      property: "Modern Condo 3C",
      task: "Clean air conditioning unit",
      maintenanceStaff: "Catherine Malone",
      dueDate: "2025-01-01",
    },
    {
      id: 4,
      property: "Spacious Loft 4B",
      task: "Replace broken window",
      maintenanceStaff: "Willie Medina",
      dueDate: "2025-01-01",
    },
    {
      id: 5,
      property: "Charming Villa 5A",
      task: "Check plumbing for leaks",
      maintenanceStaff: "Jose Ruiz",
      dueDate: "2025-01-01",
    },
    {
      id: 6,
      property: "Luxury Condo 5B",
      task: "Install new light fixtures",
      maintenanceStaff: "Katharine Owens",
      dueDate: "2025-01-01",
    },
    {
      id: 7,
      property: "Family Townhouse 7A",
      task: "Fix heating system",
      maintenanceStaff: "Shawn Norman",
      dueDate: "2025-01-01",
    },
    {
      id: 8,
      property: "Elegant Studio 6B",
      task: "Paint interior walls",
      maintenanceStaff: "Don Holloway",
      dueDate: "2025-01-01",
    },
    {
      id: 9,
      property: "Seaside Cottage 6C",
      task: "Inspect roof for damage",
      maintenanceStaff: "Franklin Gregory",
      dueDate: "2025-01-01",
    },
    {
      id: 10,
      property: "Modern Penthouse 6D",
      task: "Re-grout bathroom tiles",
      maintenanceStaff: "Danny Nguyen",
      dueDate: "2025-01-01",
    },
  ];
 
  export const propertyRentalTransactionsData = [
    {
      id: 1,
      property: "Sunny Apartment 1A",
      tenant: "Alice Johnson",
      landlord: "John Doe",
      date: "2025-01-01",
      type: "rental",
      rentAmount: 1200,
    },
    {
      id: 2,
      property: "Cozy House 2A",
      tenant: "Bob Smith",
      landlord: "John Doe",
      date: "2025-01-01",
      type: "rental",
      rentAmount: 1500,
    },
    {
      id: 3,
      property: "Modern Condo 3C",
      tenant: "Charlie Lee",
      landlord: "John Doe",
      date: "2025-01-01",
      type: "rental",
      rentAmount: 1800,
    },
    {
      id: 4,
      property: "Spacious Loft 4B",
      tenant: "Dana White",
      landlord: "John Doe",
      date: "2025-01-01",
      type: "rental",
      rentAmount: 2200,
    },
    {
      id: 5,
      property: "Charming Villa 5A",
      tenant: "Eve Black",
      landlord: "John Doe",
      date: "2025-01-01",
      type: "rental",
      rentAmount: 2500,
    },
    {
      id: 6,
      property: "Luxury Condo 5B",
      tenant: "Frank Green",
      landlord: "John Doe",
      date: "2025-01-01",
      type: "rental",
      rentAmount: 2700,
    },
    {
      id: 7,
      property: "Family Townhouse 7A",
      tenant: "Grace Blue",
      landlord: "John Doe",
      date: "2025-01-01",
      type: "rental",
      rentAmount: 3000,
    },
    {
      id: 8,
      property: "Elegant Studio 6B",
      tenant: "Hank Red",
      landlord: "John Doe",
      date: "2025-01-01",
      type: "rental",
      rentAmount: 1300,
    },
    {
      id: 9,
      property: "Seaside Cottage 6C",
      tenant: "Ivy Orange",
      landlord: "John Doe",
      date: "2025-01-01",
      type: "rental",
      rentAmount: 1800,
    },
    {
      id: 10,
      property: "Modern Penthouse 6D",
      tenant: "Jack Purple",
      landlord: "John Doe",
      date: "2025-01-01",
      type: "rental",
      rentAmount: 3500,
    },
  ];
    
  