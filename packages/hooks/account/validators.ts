export const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return re.test(email);
};

export const validatePassword = (password: string) => password.length >= 6;
