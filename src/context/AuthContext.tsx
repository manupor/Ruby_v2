'use client'

import AuthModal from '@/components/auth/AuthModal'
import React, { createContext, useContext, useState } from 'react'

type AuthModalState = {
  isOpen: boolean
  activeTab: 'login' | 'register'
}

type AuthContextType = {
  openLogin: () => void
  openRegister: () => void
  closeAuthModal: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authModalState, setAuthModalState] = useState<AuthModalState>({
    isOpen: false,
    activeTab: 'login'
  })

  const openLogin = () => {
    setAuthModalState({
      isOpen: true,
      activeTab: 'login'
    })
  }

  const openRegister = () => {
    setAuthModalState({
      isOpen: true,
      activeTab: 'register'
    })
  }

  const closeAuthModal = () => {
    setAuthModalState(prev => ({
      ...prev,
      isOpen: false
    }))
  }

  return (
    <AuthContext.Provider
      value={{
        openLogin,
        openRegister,
        closeAuthModal
      }}
    >
      {children}
      <AuthModal
        isOpen={authModalState.isOpen}
        onClose={closeAuthModal}
        initialTab={authModalState.activeTab}
      />
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}