class Optional<T> {
    private constructor(private value: T) {}

    static empty<T>(): Optional<T> {
        return new Optional(null);
    }
}

export default Optional;
