const getPathname = pathname => {
    return pathname.split("/").length > 2 ? `/${pathname.split("/")[1]}` : pathname;
};

export { getPathname };
