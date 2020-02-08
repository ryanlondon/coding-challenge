import * as helpers from "../helpers";

describe("filter artworks by title", () => {
  let fakeArtworks;
  beforeEach(() => {
    fakeArtworks = [
      { artId: 123, artworkTitle: "One Two Three" },
      { artId: 321, artworkTitle: "Three Two One" },
      { artId: 456, artworkTitle: "Four Five Six" },
      { artId: 789, artworkTitle: "Seven Eight Nine" }
    ];
  });

  it("returns all artworks when search is falsy", () => {
    const filtered = helpers.filterArtworksByTitle(fakeArtworks, null);
    expect(filtered).toBe(fakeArtworks);
  });

  it('filters artworks by the "artworkTitle" property', () => {
    const filtered = helpers.filterArtworksByTitle(fakeArtworks, "One");
    expect(filtered.length).toBe(2);
    const filteredIds = filtered.map(artwork => artwork.artId);
    expect(filteredIds).toContain(123);
    expect(filteredIds).toContain(321);
  });

  it("is case insensitive", () => {
    const filtered = helpers.filterArtworksByTitle(fakeArtworks, "fIVe");
    expect(filtered.length).toBe(1);
    expect(filtered[0].artId).toBe(456);
  });
});
