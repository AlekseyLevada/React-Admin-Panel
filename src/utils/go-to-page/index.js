import React, {useNavigate} from 'react-router-dom'

export function GoToPage(pageId) {
    const navigate = useNavigate()
    navigate(pageId)
}