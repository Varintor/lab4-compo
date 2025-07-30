export interface Event {
    id: number
    category:String
    title:String
    description: String
    location: String
    date: String
    time: String
    petsAllowed: boolean
    organizer: String
}

export interface Student {
  id: number
  studentId: string
  name: string
  surname: string
  gpa: number
  image: string
  description: string
}
export interface MessageState{
  message: string
}
export interface EventState {
  event: Event | null
}