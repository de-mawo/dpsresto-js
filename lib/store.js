import { create } from "zustand"


export const useSideBarDrawer = create((set) => ({
    isSideBarOpen: false,
    onSideBarOpen: () =>  set({isSideBarOpen: true}),
    onSideBarClose: () =>  set({isSideBarOpen: false})
}))