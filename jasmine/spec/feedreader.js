
/* feedreader.js 2   3   4   5   6   7   8   9   10*/

            /* TODO: Write a test that loops through each feed
                     * in the allFeeds object and ensures it has a URL defined
                     * and that the URL is not empty.
            */
/*
* THIS IS THE TEST FOR THE ALLFEEDS VARIABLE. 
* THE 3 SPECS ARE AS FOLLOWS: IT SHOULD VERIFY THAT THE RSS FEEDS, RSS URLS, AND RSS NAMES ARE DEFINED AND NOT EMPTY.
*/
$(function(){
    describe('RSS Feeds', () => {
        it('feeds should be defined and not empty', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });        
        it('urls should be defined and not empty', () => {
            for(var x=0; x < allFeeds.length; x++){
                expect(allFeeds[x].url).toBeDefined();
                expect(allFeeds[x].url.length).not.toBe(0);
            }
        });        
        it('names should be defined and not empty', () => {
            for(var x=0; x < allFeeds.length; x++){
                expect(allFeeds[x].name).toBeDefined();
                expect(allFeeds[x].name).not.toBe(0);
            }
        });
    });
    
    
    
    
    
            /* TODO: Write a new test suite named "The menu" 
            */ 
    
/* WRITE A TEST THAT ENSURES THE MENU ELEMENT IS HIDDEN BY DEFAULT. 
*/    
    describe('The Menu', () => {
        it('the element, "menu-hidden", should be hidden by default', () => {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
/* WRITE A TEST THAT ENSURES THE MENU ELEMENT TOGGLES WHEN CLICKED. TEST THAT THE MENU ELEMENT SHOWS ITSELF WHEN CLICKED, AND THEN HIDES ITS ELEMENTS WHEN CLICKED AGAIN.
*/
        it('the menu element should show or hide when toggled', () => {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });
    
    
    
    
    
            /* TODO: Write a new test suite named "Initial Entries" 
            */
    
/* WRITE A TEST THAT ENSURES THERE IS AT LEAST 1 .ENTRY ELEMENT INSIDE THE .FEED AFTER THE LOADFEED IS CALLED AND DONE. 
*/       
    describe('Initial Entries', () => {        
        beforeEach((done) => {
            loadFeed(0, () => {
                done();
            });
        });

        it("should contain minimum a single .entry inside .feed after loadFeed() is called", ((done) => {
            var numberEntries = document.querySelector(".feed").getElementsByClassName("entry").length;
            expect(numberEntries).toBeGreaterThan(0);
            done();          
        }));
    });
    
    
    
    
    
                 /* TODO: Write a new test suite named "New Feed Selection" 
                */
    
/* WRITE A TEST THAT VERIFIES THAT THE CONTENT FROM THE LOADFEED FUNCTION ACTUALLY CHANGES, BECAUSE, IT IS ASYNCHRONOUS.
*/       
    describe('New Feed Selection', () => {
        var initFeedSelection;
        beforeEach((done) => {
            loadFeed(0, () => {
                initFeedSelection = document.querySelector(".feed").innerHTML;           
                loadFeed(1, () => {
                    done();
                });
            });
        });        
        it("new feeds should render different content after loadfeed() executes", ((done)=> {
            var newFeedSelection = document.querySelector(".feed").innerHTML;
            expect(initFeedSelection).not.toBe(newFeedSelection);
            done();
        }));
    })
        
}());