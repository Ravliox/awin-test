export default interface FormData {
    profileForm: {
        firstName?: string,
        lastName?: string,
        email?: string,
        bio?: string,
    },
    additionalInfo : {
        socialMediaLinks?: string[],
        expertise?: string,
        areasOfInterest?: string[]
    }
}