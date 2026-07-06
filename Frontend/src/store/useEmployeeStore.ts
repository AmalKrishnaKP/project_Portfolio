import { create } from 'zustand'

export type Employee = {
  id: string
  name: string
  role: string
  department: string
  status: 'Verified' | 'Pending'
  image: string
  employeeId?: string
  requestType?: string
  currentAboutMe?: string
  currentSkills?: string[]
  requestedAboutMe?: string
  requestedSkills?: string[]
  changesCount?: number
}

type EmployeeState = {
  employees: Employee[]
  updateEmployee: (id: string, values: Partial<Employee>) => void
  verifyEmployee: (id: string) => void
}

const initialEmployees: Employee[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Senior Frontend Engineer',
    department: 'Build',
    status: 'Verified',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPO2kmoVHpiZ2zWe5wxVmNjGqypjvVVr0OObhUQR4aHcsEqZ3_qF-kzq1uIr0z6aEmAmOZ8NZyA9lGelw2Dure9hXrlXi9ECItjornf8Xmn2zG6XrlKjC4nRwZT4z1bQTHyg29U79ThTk1J59YHp9XRMnoOvde0UxmrrNnMdy0momDaK7L6YfLhlrrwl937bZY9wrM4mminhUdETxQA7sxoIAAGeu1bensRBJtf5lu60Vhj_GI7spLIFH7WOjZ68ED-a6slZR5Ovif',
    currentAboutMe: 'Senior Frontend Engineer with a passion for building clean, user-friendly interfaces.',
    currentSkills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
    requestedAboutMe: '',
    requestedSkills: [],
    changesCount: 0
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Product Lead',
    department: 'Buy',
    status: 'Pending',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa4_fu0NvJagCESGywi01z4TyNdM3tg_pMe9GA8MpFVPLzSD-5EriuShz1MC2qBw-A5qbC8dKnobf3NuCJBHpFWKsX_dbqPq7HnnhvTz8xgQoySyvTE0q1RRD1nbtTUF9RiKK5PYESzWdPwv4tXWQu_89GeNXuTimzDwVqIYdif5muH9vtbSkR1vswFaFqYIvjO6TPrsKFRiK48h0crg_TL8ARdkNPwmCXYTFtjVtc5tDSEB3xjO5c2M6kVzx4ccumVkAQM9TQS8oX',
    employeeId: '44291',
    requestType: 'Profile & Skills Update',
    currentAboutMe: 'Highly motivated individual focused on delivering quality results through collaborative teamwork and innovation.',
    currentSkills: ['Project Management', 'Strategy'],
    requestedAboutMe: 'Lead Product Manager with over 8 years of experience in scaling SaaS platforms. Passionate about user-centric design and data-driven decision making. Spearheaded the 2023 Enterprise Growth initiative.',
    requestedSkills: ['SaaS Growth', 'Agile Leadership', 'Project Management', 'Strategy'],
    changesCount: 2
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'HR Director',
    department: 'Human Resources',
    status: 'Verified',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTzPTd5ELmhtDEJ-ukIzs36jusU89nlA8axTBStaTkzxHYerpGYeaCvgOBBY0q8oISxJb8hQdqgTsVHylGz4VfJoLBQRR6unyJaLrBkwlmpcdZ6tle0O99Xrbk23SnaLJ6XETzZbYliNf4c56PbDzXlqIqVkLTR7R4KJSEI83U-qEdVQRtsXoBM3-H8LCNuHRldTo9Pt3EidHMymS_JPoaO_Op6eTe2r0d0DpGsozXIDTmL_1G8cvoqYZ9kjEhC94uyxdEuCrZvSvo',
    currentAboutMe: 'HR Director with over 10 years of experience in talent management, recruitment, and organizational culture building.',
    currentSkills: ['Recruiting', 'Conflict Resolution', 'Onboarding', 'Strategic HR'],
    requestedAboutMe: '',
    requestedSkills: [],
    changesCount: 0
  },
  {
    id: '4',
    name: 'Julian Brooks',
    role: 'Marketing Specialist',
    department: 'Sales',
    status: 'Pending',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtQHBzxyRjx3zSuEWPEGhkfDOYaW8FQSwrINP54YL3CaKlt0v-rnSMsOA2qsbobmaGESwoXNHtxO7QHl99woDFhDFcZZ58OX8dTn_Y2L8IkXaH4Q3YbLguSEKtVu5qWFZh_ZxxDtQ-x3GAhV31UG_BI5kp7UYguu4VLV_iqPG0blXMZV8zk2rq3QYQwWWqUgwzNn6l6c9zoBRiwOvk494XKzZkzJdpOe8D7jaTtdGVYwYPDM14Ejv3afevtk675Yxx2pvrsbwSrzI-',
    employeeId: '88201',
    requestType: 'Department Change',
    currentAboutMe: 'Highly motivated individual focused on delivering quality results through collaborative teamwork and innovation.',
    currentSkills: ['Project Management', 'Strategy'],
    requestedAboutMe: 'Lead Product Manager with over 8 years of experience in scaling SaaS platforms. Passionate about user-centric design and data-driven decision making. Spearheaded the 2023 Enterprise Growth initiative.',
    requestedSkills: ['SaaS Growth', 'Agile Leadership', 'Project Management', 'Strategy'],
    changesCount: 2
  },
]

export const useEmployeeStore = create<EmployeeState>((set) => ({
  employees: initialEmployees,
  updateEmployee: (id, values) =>
    set((state) => ({
      employees: state.employees.map((emp) =>
        emp.id === id ? { ...emp, ...values } : emp
      ),
    })),
  verifyEmployee: (id) =>
    set((state) => ({
      employees: state.employees.map((emp) =>
        emp.id === id
          ? {
            ...emp,
            status: 'Verified',
            currentAboutMe: emp.requestedAboutMe || emp.currentAboutMe || '',
            requestedAboutMe: '',
            currentSkills: emp.requestedSkills || emp.currentSkills || [],
            requestedSkills: [],
            changesCount: 0,
          }
          : emp
      ),
    })),
}))
